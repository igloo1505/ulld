"use client";
import React, { useState } from "react";
import NoteTypesList from "../dataDisplay/noteTypes/main";
import { useFormContext } from "@ulld/full-form/form";
import { ConfigurationFormData, NoteTypeInput, defaultNoteType } from "../staticData";
import { Button } from "@ulld/tailwind/button";
import NoteTypeModal from "../modals/noteTypeModal/main";

interface NoteTypesFormProps { }

const NoteTypesForm = (props: NoteTypesFormProps) => {
    const [noteTypeModalOpen, setNoteTypeModalOpen] = useState(false);
    const form = useFormContext<ConfigurationFormData>();
    const [editingItem, setEditingItem] = useState<(NoteTypeInput & {index: number}) | undefined>(undefined)
    const showNoteTypeModal = () => setNoteTypeModalOpen(true);
    const appendNoteType = (
        value: NoteTypeInput,
    ) => {
        form.setValue("noteTypes", [...form.getValues("noteTypes"), value]);
    };
    const removeItem = (itemToRemove: ConfigurationFormData["noteTypes"][number]) => {
        form.setValue(
            "noteTypes",
            form
                .getValues("noteTypes")
                .filter(
                    (a) =>
                        !Boolean(
                            a.icon === itemToRemove.icon &&
                            a.label === itemToRemove.label &&
                            a.inNavbar === itemToRemove.inNavbar &&
                            a.inSidebar === itemToRemove.inSidebar,
                        ),
                ),
        );
    };

    const editItem = (index: number) => {
        let itemToEdit = form.getValues("noteTypes")[index]
        setEditingItem({...itemToEdit, index})
        setNoteTypeModalOpen(true)
    };

    const currentNoteTypes = form.watch("noteTypes")

    return (
        <>
            <NoteTypeModal
                open={noteTypeModalOpen}
                onClose={() => setNoteTypeModalOpen(false)}
                onAccept={appendNoteType}
                editingItem={editingItem}
                noteTypes={currentNoteTypes}
                setItems={(newItems: NoteTypeInput[]) =>
                    form.setValue("noteTypes", newItems)
                }
            />
            <NoteTypesList
                items={currentNoteTypes || []}
                setItems={(newItems: ConfigurationFormData["noteTypes"]) =>
                    form.setValue("noteTypes", newItems)
                }
                removeItem={removeItem}
                editItem={editItem}
            />
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
