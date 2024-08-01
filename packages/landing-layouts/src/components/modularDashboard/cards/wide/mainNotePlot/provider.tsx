"use client";
import { ReactNode, createContext, useReducer, useContext } from "react";
import { ModularDashboardData, NoteFilterType } from "../../../types";
import { TimePeriodOption } from "@ulld/utilities/dateTime";
import DashboardInnerProvider from "./innerProvider";

interface DashboardState {
    notes: ModularDashboardData["lastAccessNotes"];
    filteredNotes: ModularDashboardData["lastAccessNotes"];
    filterType: NoteFilterType;
    plotFilterType?: string;
    timePeriod?: TimePeriodOption;
}

const defaultInitialValues: DashboardState = {
    notes: [],
    filteredNotes: [],
    filterType: "lastAccess",
};

export const DashboardContext =
    createContext<DashboardState>(defaultInitialValues);

type DashboardContextActions =
    | {
        type: "setAllNotes";
        payload: {
        notes: ModularDashboardData["lastAccessNotes"]
        filteredNotes?: ModularDashboardData["lastAccessNotes"]
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
}

export const DashboardProvider = ({
    children,
    initialValues,
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
                <DashboardInnerProvider>{children}</DashboardInnerProvider>
            </DashboardDispatchContext.Provider>
        </DashboardContext.Provider>
    );
};
