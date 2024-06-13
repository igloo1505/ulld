import React, { useEffect, useState } from "react";
import { NoteType, NoteTypeInput } from "../../staticData";
import { Button } from "@ulld/tailwind/button";
import { Form } from "@ulld/tailwind/form";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@ulld/tailwind/dialog";
import { useForm } from "@ulld/full-form/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { documentTypeConfigSchema } from "@ulld/configschema/zod/documentConfigSchema";
import { useNoteTypeFormState } from "../../dataDisplay/noteTypes/useNoteTypeFormState";


const NoteTypeColorModal = () => {

    const {
        editingItem,
        showColorModal: open,
        closeColorModal: close,
        isEditing,
        clearEditing,
        updateEditingItem,
    } = useNoteTypeFormState();

    const form = useForm<NoteType>({
        resolver: zodResolver(documentTypeConfigSchema),
        defaultValues: editingItem,
    });

    useEffect(() => {
        if (editingItem) {
            for (const k in editingItem) {
                if (k !== "index") {
                    let value = editingItem[k as keyof NoteTypeInput];
                    if (typeof value !== "undefined") {
                        form.setValue(k as keyof NoteTypeInput, value as any);
                    }
                }
            }
        }
    }, [editingItem]);

    const appendItem = (values: NoteType) => {
        console.log(`Appending with `, values);
        if (isEditing.current) {
            updateEditingItem(values);
            clearEditing();
            form.reset();
            close();
        }
    };

    return (
        <Dialog
            open={open}
            onOpenChange={(newOpen) => {
                if (!newOpen) {
                    close();
                }
            }}
        >
            <DialogContent className={"lg:w-fit lg:max-w-[90vw]"}>
                <DialogHeader>
                    <DialogTitle>Extend the default UI for this note type.</DialogTitle>
                    <DialogDescription>
                        Some themes, extensions and layouts may use colors unique to a
                        specific note type to help with searchability and{" "}
                        <span className={"italic"}>at-a-glance</span> referencing. Your app
                        will not break if these are not included, but it's a good idea to
                        get the most from your initial configuration.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        className={"flex flex-col justify-center items-start gap-6"}
                        onSubmit={form.handleSubmit(appendItem)}
                    >
                        <div
                            className={
                                "space-y-6 lg:flex lg:flex-row lg:justify-center lg:items-start lg:gap-6"
                            }
                        >
                            NOTE TYPE COLOR SETTINGS GO HERE
                        </div>
                        <DialogFooter
                            className={"w-full flex flex-row justify-end items-center"}
                        >
                            <Button type="submit">Save</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

NoteTypeColorModal.displayName = "NoteTypeColorModal";

export default NoteTypeColorModal;
