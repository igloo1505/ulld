"use client"
import { ReactNode, createContext, useReducer, useContext } from "react";

export interface NavigationSettingsState {
    addFooterItemLinkModal: false | number // idx or footerItem
    editFooterSectionLabelModal: false | number // idx or footerItem
}

const defaultInitialValues: NavigationSettingsState = {
    addFooterItemLinkModal: false,
    editFooterSectionLabelModal: false
}

export const NavigationSettingsContext = createContext<NavigationSettingsState>(defaultInitialValues);

type NavigationSettingsContextActions = {type: "addFooterItemLink", payload: NavigationSettingsState["addFooterItemLinkModal"]} | {
    type: "editFooterSectionLabel",
    payload: number | false
}

export const NavigationSettingsDispatchContext = createContext<React.Dispatch<NavigationSettingsContextActions>>(null!);


export const useNavigationSettingsContext = () => useContext(NavigationSettingsContext)
export const useNavigationSettingsDispatch = () => useContext(NavigationSettingsDispatchContext)


export const NavigationSettingsContextReducer = (state: NavigationSettingsState, action: NavigationSettingsContextActions): NavigationSettingsState => {
    switch (action.type) {
        case 'addFooterItemLink': {
            return {
                ...state,
                addFooterItemLinkModal: action.payload,
            }
        }
        case 'editFooterSectionLabel': {
            return {
                ...state,
                editFooterSectionLabelModal: action.payload,
            }
        }
        default: {
            return state
        }
    }
}

NavigationSettingsContextReducer.displayName = "NavigationSettingsContextReducer"

interface NavigationSettingsProviderProps {
   children: ReactNode
   initialValues?: Partial<NavigationSettingsState>
}

export const NavigationSettingsProvider = ({children, initialValues}: NavigationSettingsProviderProps) => {
    const [state, dispatch] = useReducer(
        NavigationSettingsContextReducer,
        initialValues
            ? { ...initialValues, ...defaultInitialValues }
            : defaultInitialValues,
    );
     
    return (
    <NavigationSettingsContext.Provider value={state} >
        <NavigationSettingsDispatchContext.Provider value={dispatch}>
                {children}
        </NavigationSettingsDispatchContext.Provider>
    </NavigationSettingsContext.Provider>
    )
}

