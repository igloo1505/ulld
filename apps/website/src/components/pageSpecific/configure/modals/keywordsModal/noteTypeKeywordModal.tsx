"use client";
import React, { useEffect, useState } from "react";
import { useNoteTypeFormState } from "../../dataDisplay/noteTypes/useNoteTypeFormState";
import KeywordsModal from "./main";
import deepmerge from "deepmerge";
import { NoteTypeInput } from "../../staticData";

interface NoteTypeKeywordModalProps { }

const NoteTypeKeywordModal = (props: NoteTypeKeywordModalProps) => {
    const { editingItem, showKeywordModal, updateEditingItem, closeKeywordModal } =
        useNoteTypeFormState();
    const [values, setValues] = useState<string[]>([]);

    useEffect(() => {
        if (editingItem) {
            setValues(editingItem.keywords || [])
        } else {
            setValues([])
        }
    }, [editingItem]);

    return (
        <KeywordsModal
            defaultValues={values}
            close={closeKeywordModal}
            desc="Optionally add some keywords to help locate this note type when using a plain text search."
            open={showKeywordModal}
            onAccept={() => {
                if (!editingItem) return;
                let newItem: NoteTypeInput = deepmerge<typeof editingItem>(editingItem, { keywords: values });
                updateEditingItem(newItem)
                closeKeywordModal();
            }}
        />
    );
};

NoteTypeKeywordModal.displayName = "NoteTypeKeywordModal";

export default NoteTypeKeywordModal;
