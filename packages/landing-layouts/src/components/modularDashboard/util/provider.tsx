"use client";
import React, { ReactNode, createContext, useReducer, useContext } from "react";
import { TimePeriodOption } from "@ulld/utilities/dateTime";
import DashboardInnerProvider from "./innerProvider";
import {
    MainPlotFilterType,
    ModularDashboardData,
    NoteFilterType,
    TaskManagerOverview,
} from "../types";

export interface DashboardState
    extends Omit<TaskManagerOverview, "overdueCount"> {
    notes: ModularDashboardData["lastAccessNotes"];
    filteredNotes: ModularDashboardData["lastAccessNotes"];
    filterType: NoteFilterType;
    plotFilterType?: MainPlotFilterType;
    totalNotes?: {
        mdx: number;
        notebook: number;
        total: number;
    };
    timePeriod?: TimePeriodOption;
    noteTypes: string[];
    overallFirstSync?: string | Date;
    overdueCount?: TaskManagerOverview["overdueCount"];
}

const defaultInitialValues: DashboardState = {
    notes: [],
    filteredNotes: [],
    taskLists: [],
    noteTypes: [],
    tasks: [],
    filterType: "lastAccess",
};

export const DashboardContext =
    createContext<DashboardState>(defaultInitialValues);

type DashboardContextActions =
    | {
        type: "setAllNotes";
        payload: {
            notes: ModularDashboardData["lastAccessNotes"];
            filteredNotes?: ModularDashboardData["lastAccessNotes"];
        };
    }
    | {
        type: "setFilteredNotes";
        payload: {
            filteredNotes: ModularDashboardData["lastAccessNotes"];
            timePeriod: TimePeriodOption;
        };
    }
    | {
        type: "setTimePeriod";
        payload: {
            timePeriod: TimePeriodOption;
        };
    }
    | {
        type: "setPlotFilterType";
        payload: DashboardState["plotFilterType"];
    }
    | {
        type: "setInitialTaskData";
        payload: TaskManagerOverview;
    }
    | {
        type: "setInitialModularData";
        payload: ModularDashboardData;
    };

export const DashboardDispatchContext = createContext<
    React.Dispatch<DashboardContextActions>
>(null!);

export const useDashboardContext = () => useContext(DashboardContext);
export const useDashboardDispatch = () => useContext(DashboardDispatchContext);

export const DashboardContextReducer = (
    state: DashboardState,
    action: DashboardContextActions,
): DashboardState => {
    switch (action.type) {
        case "setPlotFilterType": {
            return {
                ...state,
                plotFilterType: action.payload,
            };
        }
        case "setTimePeriod": {
            return {
                ...state,
                timePeriod: action.payload.timePeriod,
            };
        }
        case "setAllNotes": {
            return {
                ...state,
                ...action.payload,
            };
        }
        case "setInitialTaskData": {
            return {
                ...state,
                ...action.payload,
            };
        }
        case "setInitialModularData": {
            return {
                ...state,
                totalNotes: action.payload.totalNotes,
                notes: action.payload.lastAccessNotes,
                overallFirstSync: action.payload.overallFirstSync,
                noteTypes: action.payload.uniqueNoteTypes,
                /* filteredNotes: state.filteredNotes.length ? state.filteredNotes : action.payload.lastAccessNotes */
            };
        }
        case "setFilteredNotes": {
            return {
                ...state,
                ...action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

DashboardContextReducer.displayName = "DashboardContextReducer";

interface DashboardProviderProps {
    children: ReactNode;
    initialValues?: Partial<DashboardState>;
    initialModularData: ModularDashboardData;
    initialTaskData: TaskManagerOverview;
}

export const DashboardProvider = ({
    children,
    initialValues,
    initialModularData,
    initialTaskData,
}: DashboardProviderProps) => {
    const [state, dispatch] = useReducer(
        DashboardContextReducer,
        initialValues
            ? { ...initialValues, ...defaultInitialValues }
            : defaultInitialValues,
    );

    return (
        <DashboardContext.Provider value={state}>
            <DashboardDispatchContext.Provider value={dispatch}>
                <DashboardInnerProvider
                    initialModularData={initialModularData}
                    initialTaskData={initialTaskData}
                >
                    {children}
                </DashboardInnerProvider>
            </DashboardDispatchContext.Provider>
        </DashboardContext.Provider>
    );
};
