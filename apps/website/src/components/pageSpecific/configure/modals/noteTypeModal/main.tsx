import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@ulld/tailwind/dialog";
import React, { useEffect, useState } from "react";
import {
    NoteTypeInput,
    NoteType,
    defaultNoteType,
    noteTypeSchema,
} from "../../staticData";
import { useForm } from "@ulld/full-form/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextInput } from "@ulld/full-form/textInput";
import { Form } from "@ulld/tailwind/form";
import { Button } from "@ulld/tailwind/button";
import { IconInput } from "@ulld/full-form/iconSelect";
import { CheckboxGroup } from "@ulld/full-form/checkboxGroup";
import { CheckboxInputItem } from "@ulld/full-form/checkboxGroupTypes";
import { useNoteTypeFormState } from "../../dataDisplay/noteTypes/useNoteTypeFormState";

export interface NoteTypeModalProps { }

type CheckboxItems = CheckboxInputItem<Omit<NoteTypeInput, "icon">>[];

const cbGroupItems: CheckboxItems = [
    {
        label: "Sidebar",
        desc: "Append this note type to the secondary navigation sidebar.",
        name: "inSidebar",
        value: false,
    },
    {
        label: "Navbar",
        desc: "Append this note type to the primary navigation bar.",
        name: "inNavbar",
        value: false,
    },
];

const cbGroupNames = cbGroupItems.map((a) => a.name);

const NoteTypeModal = ({ }: NoteTypeModalProps) => {
    const form = useForm<NoteType>({
        resolver: zodResolver(noteTypeSchema),
        defaultValues: defaultNoteType,
    });

    const {
        editingItem,
        noteTypes,
        editingIndex,
        closeAddItemModal: close,
        clearEditing,
        addItemModalOpen: open,
        setItems,
        appendNoteType: onAccept,
    } = useNoteTypeFormState();

    const [checkboxGroupItems, setCheckboxGroupItems] =
        useState<CheckboxItems>(cbGroupItems);

    useEffect(() => {
        let cbItems = checkboxGroupItems;
        if (editingItem) {
            for (const k in editingItem) {
                if (k !== "index") {
                    let value = editingItem[k as keyof NoteTypeInput];
                    if (cbGroupNames.includes(k as any)) {
                        cbItems = cbItems.map((c) =>
                            c.name === k ? { ...c, value: value as boolean } : c,
                        );
                    }
                    if (typeof value !== "undefined") {
                        form.setValue(k as keyof NoteTypeInput, value as any);
                    }
                }
            }
            setCheckboxGroupItems(cbItems);
        }
    }, [editingItem]);

    const reset = () => {
        form.reset();
        setCheckboxGroupItems(cbGroupItems);
    };

    const appendItem = (values: NoteType) => {
        if (typeof editingIndex === "number") {
            setItems(noteTypes.map((a, i) => (i === editingIndex ? values : a)));
            clearEditing();
        } else {
            onAccept(values);
        }
        reset();
        close();
    };

    return (
        <Dialog
            open={open}
            onOpenChange={(newOpen) => {
                if (!newOpen) {
                    close();
                    reset();
                }
            }}
        >
            <DialogContent className={"lg:w-fit lg:max-w-[90vw] lg:min-w-[calc(100vw-4rem)] lgr:min-w-[1024px]"}>
                <DialogHeader>
                    <DialogTitle>Add a new note type</DialogTitle>
                    <DialogDescription>
                        Don't break down your notes <span className={"italic"}>too</span>{" "}
                        much. You can always filter them by subject, by topic or by tag from
                        within the compiled application.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        className={"flex flex-col justify-center items-start gap-6"}
                        onSubmit={form.handleSubmit(appendItem)}
                    >
                        <div
                            className={
                                "space-y-6 lg:flex lg:flex-row lg:justify-center lg:items-start lg:gap-6 w-full"
                            }
                        >
                            <div
                                className={
                                    "space-y-6 w-full lg:w-[min(400px,80vw)] lg:flex lg:h-full lg:flex-col lg:justify-between"
                                }
                            >
                                <TextInput name="label" label="Label" />
                                <IconInput
                                    name="icon"
                                    classes={{
                                        popover: "w-full min-w-[min(400px,80vw)]",
                                        button: "w-full min-w-[min(400px,80vw)]",
                                        icon: "text-foreground stroke-foreground",
                                    }}
                                />
                            </div>
                            <CheckboxGroup
                                switchProps={{
                                    white: true,
                                }}
                                /* label="Note Application" */
                                /* desc="Describe how this note should be displayed initially. You can always change this in the app's settings." */
                                items={checkboxGroupItems}
                            />
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

NoteTypeModal.displayName = "NoteTypeModal";

export default NoteTypeModal;
