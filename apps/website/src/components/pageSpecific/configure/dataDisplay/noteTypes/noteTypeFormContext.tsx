import { ReactNode, createContext, useReducer, useContext } from "react";
import { NoteTypeInput } from "../../staticData";

interface NoteTypeFormState {
    editingItem?: NoteTypeInput & { index?: number };
    addItemModalOpen: boolean;
    showColorModal: boolean;
    showMatchPriorityModal: boolean;
    showKeywordModal: boolean;
}


const defaultInitialValues: NoteTypeFormState = {
    addItemModalOpen: false,
    showColorModal: false,
    showMatchPriorityModal: false,
    showKeywordModal: false,
}

export const NoteTypeFormContext = createContext<NoteTypeFormState>(defaultInitialValues);

type NoteTypeFormContextActions =
    | { type: "showColorModal"; payload?: NoteTypeFormState["editingItem"] }
    | { type: "showKeywordModal"; payload?: NoteTypeFormState["editingItem"] }
    | { type: "showMatchPriority"; payload?: NoteTypeFormState["editingItem"] }
    | { type: "setEditingItem"; payload?: NoteTypeFormState["editingItem"] }
    | { type: "showAddItemModal"; payload?: boolean }
    | { type: "clearEditing" }
    | { type: "closeColorModal" }
    | { type: "closeKeywordModal" }
    | { type: "closeMatchPriorityModal" };

export const NoteTypeFormDispatchContext = createContext<
    React.Dispatch<NoteTypeFormContextActions>
>(null!);

export const useNoteTypeFormContext = () => useContext(NoteTypeFormContext);
export const useNoteTypeFormDispatch = () =>
    useContext(NoteTypeFormDispatchContext);

export const NoteTypeFormContextReducer = (
    state: NoteTypeFormState,
    action: NoteTypeFormContextActions,
): NoteTypeFormState => {
    switch (action.type) {
        case "showColorModal": {
            return {
                ...state,
                showColorModal: true,
                editingItem: action.payload,
            };
        }
        case "showKeywordModal": {
            return {
                ...state,
                showKeywordModal: true,
                editingItem: action.payload,
            };
        }
        case "showMatchPriority": {
            return {
                ...state,
                showMatchPriorityModal: true,
                editingItem: action.payload,
            };
        }
        case "closeColorModal": {
            return {
                ...state,
                showColorModal: false,
            };
        }
        case "closeKeywordModal": {
            return {
                ...state,
                showKeywordModal: false,
            };
        }
        case "closeMatchPriorityModal": {
            return {
                ...state,
                showMatchPriorityModal: false,
            };
        }
        case "setEditingItem": {
            return {
                ...state,
                editingItem: action.payload,
                addItemModalOpen: true
            };
        }
        case "showAddItemModal": {
            return {
                ...state,
                addItemModalOpen: Boolean(action.payload),
            };
        }
        case "clearEditing": {
            return {
                ...state,
                editingItem: undefined
            };
        }
        default: {
            return state;
        }
    }
};

NoteTypeFormContextReducer.displayName = "NoteTypeFormContextReducer";

interface NoteTypeFormProviderProps {
    children: ReactNode;
    initialValues?: Partial<NoteTypeFormState>;
}

export const NoteTypeFormProvider = ({
    children,
    initialValues,
}: NoteTypeFormProviderProps) => {
    const [state, dispatch] = useReducer(
        NoteTypeFormContextReducer,
        {
            ...initialValues,
            ...defaultInitialValues
        }
    );

    return (
        <NoteTypeFormContext.Provider value={state}>
            <NoteTypeFormDispatchContext.Provider value={dispatch}>
                {children}
            </NoteTypeFormDispatchContext.Provider>
        </NoteTypeFormContext.Provider>
    );
};
