"use client";
import { ReactNode, createContext, useReducer, useContext } from "react";
import { XYPlotItem } from "./types";

export interface XYPlotState {
    plotItems: XYPlotItem[];
    numericalData: Record<string, number>[];
}

const defaultInitialValues: XYPlotState = {
    plotItems: [],
    numericalData: [],
};

export const XYPlotContext = createContext<XYPlotState>(defaultInitialValues);

type XYPlotContextActions = {
    type: "toggleSidebar";
    payload?: undefined | null;
};

export const XYPlotDispatchContext = createContext<
    React.Dispatch<XYPlotContextActions>
>(null!);

export const useXYPlotContext = () => useContext(XYPlotContext);
export const useXYPlotDispatch = () => useContext(XYPlotDispatchContext);

export const XYPlotContextReducer = (
    state: XYPlotState,
    action: XYPlotContextActions,
): XYPlotState => {
    switch (action.type) {
        /* case 'xxx': { */
        /*     return { */
        /*         ...state, */
        /*         someProperty: true, */
        /*     } */
        /* } */
        default: {
            return state;
        }
    }
};

XYPlotContextReducer.displayName = "XYPlotContextReducer";

interface XYPlotProviderProps {
    children: ReactNode;
    initialValues?: Partial<XYPlotState>;
}

export const XYPlotProvider = ({
    children,
    initialValues,
}: XYPlotProviderProps) => {
    const [state, dispatch] = useReducer(
        XYPlotContextReducer,
        initialValues
            ? { ...initialValues, ...defaultInitialValues }
            : defaultInitialValues,
    );

    return (
        <XYPlotContext.Provider value={state}>
            <XYPlotDispatchContext.Provider value={dispatch}>
                {children}
            </XYPlotDispatchContext.Provider>
        </XYPlotContext.Provider>
    );
};
