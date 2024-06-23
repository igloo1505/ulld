import { ReactNode, createContext, useReducer, useContext } from "react";

interface CodeSettingFormState {
   themeSelectModal: boolean 
}

const defaultInitialValues: CodeSettingFormState = {
   themeSelectModal: false 
}

export const CodeSettingFormContext = createContext<CodeSettingFormState>(defaultInitialValues);

type CodeSettingFormContextActions = { type: "setThemeSelectModal", payload?: boolean }

export const CodeSettingFormDispatchContext = createContext<React.Dispatch<CodeSettingFormContextActions>>(null!);


export const useCodeSettingFormContext = () => useContext(CodeSettingFormContext)
export const useCodeSettingFormDispatch = () => useContext(CodeSettingFormDispatchContext)


export const CodeSettingFormContextReducer = (state: CodeSettingFormState, action: CodeSettingFormContextActions): CodeSettingFormState => {
    switch (action.type) {
        case 'setThemeSelectModal': {
            return {
                ...state,
                themeSelectModal: typeof action.payload === "boolean" ? action.payload : !state.themeSelectModal
            }
        }
        default: {
            return state
        }
    }
}

CodeSettingFormContextReducer.displayName = "CodeSettingFormContextReducer"

interface CodeSettingFormProviderProps {
   children: ReactNode
   initialValues?: CodeSettingFormState
}

export const CodeSettingFormProvider = ({children, initialValues}: CodeSettingFormProviderProps) => {
     const [state, dispatch] = useReducer(CodeSettingFormContextReducer, initialValues || defaultInitialValues)
     
    return (
    <CodeSettingFormContext.Provider value={state} >
        <CodeSettingFormDispatchContext.Provider value={dispatch}>
                {children}
        </CodeSettingFormDispatchContext.Provider>
    </CodeSettingFormContext.Provider>
    )
}

