import { zodResolver } from "@hookform/resolvers/zod";
import { NoteType } from "@prisma/client";
import { docTypeUISchema } from "@ulld/configschema/zod/documentConfigSchema";
import { useForm } from "@ulld/full-form/form";
import React, { useEffect } from "react";
import { z } from "zod";
import { useNoteTypeFormState } from "../../dataDisplay/noteTypes/useNoteTypeFormState";
import deepmerge from "deepmerge";
import { NoteTypeInput } from "../../staticData";
import { Button } from "@ulld/tailwind/button";
import { SliderInput } from "@ulld/full-form/slider";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@ulld/tailwind/dialog";
import { Form } from "@ulld/tailwind/form";

interface NoteTypeMatchPriorityModalProps { }

const schema = z.object({
    value: z.number().min(0).max(100).default(50),
});

type SchemaType = z.infer<typeof schema>;

const NoteTypeMatchPriorityModal = (props: NoteTypeMatchPriorityModalProps) => {
    const {
        editingItem,
        showMatchPriorityModal: open,
        closeMatchPriorityModal: close,
        clearEditing,
        updateEditingItem,
    } = useNoteTypeFormState();

    const form = useForm<SchemaType>({
        resolver: zodResolver(schema),
        defaultValues: {
            value: 50,
        },
    });

    useEffect(() => {
        if (editingItem && typeof editingItem.matchWeight === "number") {
            form.setValue("value", editingItem.matchWeight);
        }
    }, [editingItem]);

    const updateCurrentItem = (data: SchemaType) => {
        if (editingItem) {
            const newItem = deepmerge<NoteTypeInput>(editingItem, {
                matchWeight: data.value,
            });
            updateEditingItem(newItem);
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
                    <DialogTitle>Priority</DialogTitle>
                    <DialogDescription>Set match priority to help sort search results throughout the compiled application.</DialogDescription>
                </DialogHeader>
                <Form
                    {...form}
                >
                    <form 
                        className={"w-full space-y-6"}
                        onSubmit={form.handleSubmit(updateCurrentItem)}
                    >
                        <SliderInput
                            name="value"
                            label="Search Priority"
                        />
                        <DialogFooter
                            className={"w-full flex flex-row justify-end items-center"}
                        >
                            <Button
                                type="submit"
                            >
                                Save
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

NoteTypeMatchPriorityModal.displayName = "NoteTypeMatchPriorityModal";

export default NoteTypeMatchPriorityModal;
