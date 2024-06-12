"use client"
import React, { useState } from "react";
import NoteTypesList from "../dataDisplay/noteTypes/main";
import { useFormContext } from "@ulld/full-form/form";
import { ConfigurationFormData } from "../staticData";
import { Button } from "@ulld/tailwind/button";
import NoteTypeModal from "../modals/noteTypeModal/main";

interface NoteTypesFormProps { }

const NoteTypesForm = (props: NoteTypesFormProps) => {
    const [noteTypeModalOpen, setNoteTypeModalOpen] = useState(false)
    const form = useFormContext<ConfigurationFormData>();
    const showNoteTypeModal = () => setNoteTypeModalOpen(true);
    const appendNoteType = (value: ConfigurationFormData["noteTypes"][number]) => {
           form.setValue("noteTypes", [...form.getValues("noteTypes"), value]) 
    }
    console.log("form: ", form)
    return (
        <>
            <NoteTypeModal
                open={noteTypeModalOpen} 
                onClose={() => setNoteTypeModalOpen(false)}
                onAccept={appendNoteType}
            />
            <NoteTypesList items={form.watch("noteTypes") || []} />
            <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={showNoteTypeModal}
            >
                Add Note Type
            </Button>
        </>
    );
};

NoteTypesForm.displayName = "NoteTypesForm";

export default NoteTypesForm;
