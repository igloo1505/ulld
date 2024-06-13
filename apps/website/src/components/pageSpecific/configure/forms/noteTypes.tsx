"use client";
import React, { useState } from "react";
import NoteTypesList from "../dataDisplay/noteTypes/main";
import { useFormContext } from "@ulld/full-form/form";
import {
    ConfigurationFormData,
    ConfigurationFormType,
    NoteType,
    NoteTypeInput,
} from "../staticData";
import { Button } from "@ulld/tailwind/button";
import NoteTypeModal from "../modals/noteTypeModal/main";
import { documentTypeConfigSchema } from "@ulld/configschema/zod/documentConfigSchema";
import NoteTypeColorModal from "../modals/noteTypeColor/main";
import { NoteTypeFormProvider } from "../dataDisplay/noteTypes/noteTypeFormContext";
import AddNoteTypeButton from "../dataDisplay/noteTypes/addNoteTypeButton";


const NoteTypesForm = () => {

    return (
        <NoteTypeFormProvider>
            <NoteTypeModal
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
