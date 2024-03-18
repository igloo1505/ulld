
import { createContext } from 'react';

export interface FullFormContextSchema {
    activeAside?: string | null
    defaultAside?: string | null
}

export const FullFormContext = createContext<FullFormContextSchema>({
    activeAside: null,
    defaultAside: null
});


export const FullFormDispatchContext = createContext<React.Dispatch<{
    type: FullFormActionTypes;
    payload: any;
}> | null>(null);

type FullFormActionTypes = "setActiveAside" | "toInitialAside"


export const fullFormReducer = (state: FullFormContextSchema, action: {
    type: FullFormActionTypes
    payload: any
}) => {
    switch (action.type) {
        case 'setActiveAside': {
            return {
                ...state,
                activeAside: action.payload,
            }
        }
        case 'toInitialAside': {
            return {
                ...state,
                activeAside: state.defaultAside,
            }
        }
        default: {
            return state
        }
    }
}

fullFormReducer.displayName = "FullFormReducer"
