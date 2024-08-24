"use client";
import { ReactNode, createContext, useReducer, useContext } from "react";
import { PlotThemeKey, XYPlotItem } from "./types";
import { ExtendedMath } from "@ulld/math/extendedMath";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";

export interface XYPlotState {
    theme: PlotThemeKey
    plotId: string
}

const defaultInitialValues: XYPlotState = {
    theme: "retro_metro",
    plotId: null!
};

export const XYPlotContext = createContext<XYPlotState>(defaultInitialValues);

type XYPlotContextActions = {
    type: "appendPlotItem";
    payload: XYPlotItem;
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
            ? {  ...defaultInitialValues, ...initialValues }
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
