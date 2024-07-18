"use client"
import { getRandomId } from "@ulld/utilities/identity";
import { ReactNode, createContext, useReducer, useContext } from "react";

interface TabItem {
    label: string
    id: string
    title?: string
    description?: string
}

interface TabGroupContextState {
    tabs: TabItem[]
    activeTabIndex: number
}


const defaultInitialValues: TabGroupContextState = {
    tabs: [],
    activeTabIndex: 0,
}

export const TabGroupContextContext = createContext<TabGroupContextState>(defaultInitialValues);

type TabGroupContextContextActions = { type: "appendTab", payload: TabItem } | {type: "setActiveTab", payload: number} | { type: "setById", payload: string }

export const TabGroupContextDispatchContext = createContext<React.Dispatch<TabGroupContextContextActions>>(null!);


export const useTabGroupContextContext = () => useContext(TabGroupContextContext)
export const useTabGroupContextDispatch = () => useContext(TabGroupContextDispatchContext)


export const TabGroupContextContextReducer = (state: TabGroupContextState, action: TabGroupContextContextActions): TabGroupContextState => {
    switch (action.type) {
        case 'appendTab': {
            return {
                ...state,
                tabs: state.tabs.some((s) => s.id === action.payload.id) ? state.tabs : [...state.tabs, action.payload],
            }
        }
        case 'setActiveTab': {
            return {
                ...state,
                activeTabIndex: action.payload,
            }
        }

        case 'setById': {
            return {
                ...state,
                activeTabIndex: state.tabs.map((t) => t.id).indexOf(action.payload),
            }
        }
        default: {
            return state
        }
    }
}

TabGroupContextContextReducer.displayName = "TabGroupContextContextReducer"

interface TabGroupContextProviderProps {
    children: ReactNode
    initialValues?: TabGroupContextState
}

export const TabGroupContextProvider = ({ children, initialValues }: TabGroupContextProviderProps) => {
    const [state, dispatch] = useReducer(TabGroupContextContextReducer, initialValues || defaultInitialValues)

    return (
        <TabGroupContextContext.Provider value= { state } >
        <TabGroupContextDispatchContext.Provider value={ dispatch }>
            { children }
            </TabGroupContextDispatchContext.Provider>
           </TabGroupContextContext.Provider>
    )
}

