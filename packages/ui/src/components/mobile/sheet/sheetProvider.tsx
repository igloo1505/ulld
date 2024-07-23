"use client"
import { DragControls } from "framer-motion";
import { ReactNode, createContext, useReducer, useContext } from "react";

interface MobileSheetState {
    open: boolean
    controls: DragControls | null
}

const defaultInitialValues: MobileSheetState = {
    open: false,
    controls: null
}

export const MobileSheetContext = createContext<MobileSheetState>(defaultInitialValues);

type MobileSheetContextActions = {type: "close", payload?: undefined | null} | { type: "setOpen", payload: boolean } | { type: "setDragControls", payload: DragControls }

export const MobileSheetDispatchContext = createContext<React.Dispatch<MobileSheetContextActions>>(null!);


export const useMobileSheetContext = () => useContext(MobileSheetContext)
export const useMobileSheetDispatch = () => useContext(MobileSheetDispatchContext)


export const MobileSheetContextReducer = (state: MobileSheetState, action: MobileSheetContextActions): MobileSheetState => {
    switch (action.type) {
        case 'close': {
            return {
                ...state,
                open: false,
            }
        }
        case 'setOpen': {
            return {
                ...state,
                open: action.payload,
            }
        }

        case 'setDragControls': {
            return {
                ...state,
                controls: action.payload,
            }
        }
        default: {
            return state
        }
    }
}

MobileSheetContextReducer.displayName = "MobileSheetContextReducer"

interface MobileSheetProviderProps {
   children: ReactNode
   initialValues?: MobileSheetState
}

export const MobileSheetProvider = ({children, initialValues}: MobileSheetProviderProps) => {
     const [state, dispatch] = useReducer(MobileSheetContextReducer, initialValues || defaultInitialValues)
     
    return (
    <MobileSheetContext.Provider value={state} >
        <MobileSheetDispatchContext.Provider value={dispatch}>
                {children}
        </MobileSheetDispatchContext.Provider>
    </MobileSheetContext.Provider>
    )
}

