import React, { useEffect } from "react";
import { NoteType, NoteTypeOutput } from "../../staticData";
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
import { docTypeUISchema } from "@ulld/configschema/zod/documentConfigSchema";
import { useNoteTypeFormState } from "../../dataDisplay/noteTypes/useNoteTypeFormState";
import ThemeColors from "./themeColors";
import deepmerge from "deepmerge";
import { MobileSheetDesktopDialog } from "@ulld/ui/responsive/DialogMobileSheet";

type StyleType = NoteTypeOutput["UI"]["styles"];

const NoteTypeColorModal = () => {
    const {
        editingItem,
        showColorModal: open,
        closeColorModal: close,
        clearEditing,
        updateEditingItem,
    } = useNoteTypeFormState();

    const form = useForm<NoteType["UI"]>({
        resolver: zodResolver(docTypeUISchema),
        defaultValues: editingItem?.UI,
    });

    useEffect(() => {
        if (editingItem) {
            let style: StyleType = form.getValues("styles") || ({} as StyleType);
            let editingStyle = editingItem?.UI?.styles;
            if (editingStyle) {
                for (const k in editingStyle) {
                    let value = editingStyle[k as keyof StyleType];
                    if (k && value !== undefined) {
                        style[k as keyof StyleType] = value as any;
                    }
                }
            }
        }
    }, [editingItem]);

    const appendItem = (values: NoteTypeOutput["UI"]) => {
        if (editingItem) {
            const newItem = deepmerge(editingItem, { UI: values });
            updateEditingItem(newItem);
            clearEditing();
            form.reset();
            close();
        }
    };

    return (
        <MobileSheetDesktopDialog
            open={open}
            breakpoint={1240}
            onOpenChange={(newOpen) => {
                if (!newOpen) {
                    close();
                }
            }}
            footer={
                <>
                    <Button type="submit">Save</Button>
                </>
            }
            title={"Extend the default UI for this note type."}
            desc={
                <>
                    Some themes, extensions and layouts may use colors unique to a
                    specific note type to help with searchability and{" "}
                    <span className={"italic"}>at-a-glance</span> referencing. Your app
                    will not break if these are not included, but it's a good idea to get
                    the most from your initial configuration.
                </>
            }
        >
            <Form {...form}>
                <form
                    className={"flex flex-col justify-center items-start gap-6"}
                    onSubmit={form.handleSubmit(appendItem)}
                >
                    <div
                        className={
                            "w-full space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 lg:mt-6"
                        }
                    >
                        <ThemeColors theme="dark" />
                        <ThemeColors theme="light" />
                    </div>
                </form>
            </Form>
        </MobileSheetDesktopDialog>
    );

    return (
        <Dialog
            open={open}
            onOpenChange={(newOpen) => {
                if (!newOpen) {
                    close();
                }
            }}
        >
            <DialogContent className={"w-max max-w-[min(90vw,1240px)]"}>
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
                                "w-full space-y-6 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-8 lg:mt-6"
                            }
                        >
                            <ThemeColors theme="dark" />
                            <ThemeColors theme="light" />
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
