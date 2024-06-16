"use client"
import { ReactNode, createContext, useReducer, useContext } from "react";

export type AvailableColorStringFormats = "hex" | "hsl" | "hsv" | "rgb"

interface ConfigureColorState {
    addColorModal: boolean;
    editColorModal?: string
    colorFormat: AvailableColorStringFormats
}


const defaultInitialValues: ConfigureColorState = {
    addColorModal: false,
    editColorModal: undefined,
    colorFormat: "hsl"
};

export const ConfigureColorContext =
    createContext<ConfigureColorState>(defaultInitialValues);

type ConfigureColorContextActions =
    | { type: "openAddColorModal" }
    | { type: "closeAddColorModal" }
    | { type: "openEditColorModal"; payload: string }
    | { type: "setColorFormat"; payload: AvailableColorStringFormats }
    | { type: "closeEditColorModal" };

export const ConfigureColorDispatchContext = createContext<
    React.Dispatch<ConfigureColorContextActions>
>(null!);

export const useConfigureColorContext = () => useContext(ConfigureColorContext);
export const useConfigureColorDispatch = () =>
    useContext(ConfigureColorDispatchContext);

export const ConfigureColorContextReducer = (
    state: ConfigureColorState,
    action: ConfigureColorContextActions,
): ConfigureColorState => {
    switch (action.type) {
        case "openAddColorModal": {
            return {
                ...state,
                addColorModal: true,
            };
        }
        case "closeAddColorModal": {
            return {
                ...state,
                addColorModal: false,
            };
        }
        case "openEditColorModal": {
            return {
                ...state,
                editColorModal: action.payload,
            };
        }
        case "closeEditColorModal": {
            return {
                ...state,
                editColorModal: undefined,
            };
        }
        case "setColorFormat": {
            return {
                ...state,
                colorFormat: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

ConfigureColorContextReducer.displayName = "ConfigureColorContextReducer";

interface ConfigureColorProviderProps {
    children: ReactNode;
    initialValues?: ConfigureColorState;
}

export const ConfigureColorProvider = ({
    children,
    initialValues,
}: ConfigureColorProviderProps) => {
    const [state, dispatch] = useReducer(
        ConfigureColorContextReducer,
        initialValues || defaultInitialValues,
    );

    return (
        <ConfigureColorContext.Provider value={state}>
            <ConfigureColorDispatchContext.Provider value={dispatch}>
                {children}
            </ConfigureColorDispatchContext.Provider>
        </ConfigureColorContext.Provider>
    );
};
