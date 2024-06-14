import { useContext, useRef } from "react";
import {
    NoteTypeFormContext,
    NoteTypeFormDispatchContext,
} from "./noteTypeFormContext";
import { useFormContext } from "@ulld/full-form/form";
import { ConfigurationFormType, NoteTypeInput } from "../../staticData";
import { documentTypeConfigSchema } from "@ulld/configschema/zod/documentConfigSchema";

type EditingItem = NoteTypeInput & { index: number };

export const useNoteTypeFormState = () => {
    const context = useContext(NoteTypeFormContext);
    const dispatch = useContext(NoteTypeFormDispatchContext);
    const form = useFormContext<ConfigurationFormType>();
    const isEditing = useRef(false);

    const noteTypes = form.watch("noteTypes");

    const getItemByIndex = (index: number) => {
           return noteTypes[index] 
    }

    return {
        isEditing,
        editingIndex: context.editingItem?.index,
        noteTypes,
        ...context,
        closeAddItemModal: () =>
            dispatch({ type: "showAddItemModal", payload: false }),
        clearEditing: () => dispatch({ type: "clearEditing" }),
        setEditingItem: (index: number) => {
            let values = form.getValues("noteTypes");
            isEditing.current = true;
            let targetItem = values[index];
            if (!targetItem) return;
            const editingItem: EditingItem = { ...targetItem, index };
            if (values[index]) {
                dispatch({ type: "setEditingItem", payload: editingItem });
            }
        },
        setItems: (newItems: NoteTypeInput[]) =>
            form.setValue("noteTypes", newItems as any),
        updateEditingItem: (data: NoteTypeInput) => {
            let editing = context.editingItem;
            if (!editing) return;
            const values = form.getValues("noteTypes");
            if (!values) return;
            form.setValue(
                "noteTypes",
                values.map((a, i) => (i === editing.index ? data : a)) as any,
            );
        },
        setShowColorModal: (index: number) => dispatch({type: "showColorModal", payload: {...getItemByIndex(index), index}}),
        setShowKeywordModal: (index: number) => dispatch({type: "showKeywordModal", payload: {...getItemByIndex(index), index}}),
        setShowMatchPriorityModal: (index: number) => dispatch({type: "showMatchPriority", payload: {...getItemByIndex(index), index}}),
        closeColorModal: () => dispatch({ type: "closeColorModal" }),
        closeKeywordModal: () => dispatch({ type: "closeKeywordModal" }),
        closeMatchPriorityModal: () => dispatch({ type: "closeMatchPriorityModal" }),
        removeItem: (index: number) => {
            let values = form.getValues("noteTypes");
            if (!values) return;
            form.setValue("noteTypes", values.filter((a, i) => i !== index) as any);
        },
        showAddItemModal: () => {
            dispatch({ type: "showAddItemModal", payload: true });
        },
        appendNoteType: (value: NoteTypeInput) => {
            let parsedValues = documentTypeConfigSchema.safeParse(value);
            let currentValues = form.getValues("noteTypes") || [];
            if (parsedValues.error) {
                console.error(
                    "An error occurred in NoteTypesForm in the appendNoteType function.",
                );
            }
            if (parsedValues.data) {
                form.setValue("noteTypes", [...currentValues, parsedValues.data]);
            }
        },
    };
};
