"use client";
import React from "react";
import NoteTypesList from "../dataDisplay/noteTypes/main";
import NoteTypeModal from "../modals/noteTypeModal/main";
import NoteTypeColorModal from "../modals/noteTypeColor/main";
import { NoteTypeFormProvider } from "../dataDisplay/noteTypes/noteTypeFormContext";
import AddNoteTypeButton from "../dataDisplay/noteTypes/addNoteTypeButton";
import NoteTypeKeywordModal from "../modals/keywordsModal/noteTypeKeywordModal";
import NoteTypeMatchPriorityModal from "../modals/noteTypeMatchPriorityModal/main";


const NoteTypesForm = () => {
    return (
        <NoteTypeFormProvider>
            <NoteTypeModal
            />
            <NoteTypeKeywordModal 
            />
            <NoteTypeMatchPriorityModal
            />
            <NoteTypeColorModal 
            />
            <NoteTypesList
            />
            <AddNoteTypeButton />
        </NoteTypeFormProvider>
    );
};

NoteTypesForm.displayName = "NoteTypesForm";

export default NoteTypesForm;
