"use client";
import { Button } from "@ulld/tailwind/button";
import { Label } from "@ulld/tailwind/label";
import { Form } from "@ulld/tailwind/form";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@ulld/tailwind/dialog";
import React from "react";
import {
    useNavigationSettingsContext,
    useNavigationSettingsDispatch,
} from "../../../context";
import { z } from "zod";
import { useForm, useFormContext, zodResolver } from "@ulld/full-form/form";
import {
    NavigationFormWithUtilityFields,
    navigationLinkSchema,
} from "../../../form/schema";
import { TextInput } from "@ulld/full-form/textInput";

interface AddFooterSectionLinkModalProps { }

const AddFooterSectionLinkModal = (props: AddFooterSectionLinkModalProps) => {
    const state = useNavigationSettingsContext();
    const dispatch = useNavigationSettingsDispatch();
    const externalForm = useFormContext<NavigationFormWithUtilityFields>();
    const form = useForm<z.infer<typeof navigationLinkSchema>>({
        resolver: zodResolver(navigationLinkSchema),
        defaultValues: {
            href: "/bibliography",
            label: "Bibliography",
        },
    });
    const closeModal = () => {
        dispatch({
            type: "addFooterItemLink",
            payload: false,
        });
    };
    const handleSubmit = () => {
        if (typeof state.addFooterItemLinkModal !== "number") {
            return;
        }
        if (!Object.values(form.formState.errors).length) {
            let vals = form.getValues();
            externalForm.setValue(
                "footerSections",
                externalForm.getValues("footerSections").map((x, i) =>
                    i === state.addFooterItemLinkModal
                        ? {
                            ...x,
                            items: [...x.items, vals],
                        }
                        : x,
                ),
            );
            closeModal();
        }
    };
    return (
        <Dialog
            open={typeof state.addFooterItemLinkModal === "number"}
            onOpenChange={(newOpen) => {
                if (!newOpen) {
                    closeModal();
                }
            }}
        >
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add a link</DialogTitle>
                    <DialogDescription>
                        These links will appear in your footer for quick access. Make sure
                        to use <span className={"italic"}>relative</span> links for internal
                        sources, and absolute links for external sources.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <div className="grid gap-4 py-4">
                        <div className="w-full grid grid-cols-12 items-center gap-4">
                            <Label htmlFor="name" className="text-right col-span-2">
                                Label
                            </Label>
                            <TextInput
                                name="label"
                                defaultValue="Bibliography"
                                classes={{
                                    formItem: "col-span-10",
                                }}
                            />
                        </div>
                        <div className="w-full grid grid-cols-12 items-center gap-4">
                            <Label htmlFor="username" className="text-right col-span-2">
                                Link
                            </Label>
                            <TextInput
                                name="href"
                                defaultValue="/bibliography"
                                classes={{
                                    formItem: "col-span-10",
                                }}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={handleSubmit}>Save changes</Button>
                    </DialogFooter>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

AddFooterSectionLinkModal.displayName = "AddFooterSectionLinkModal";

export default AddFooterSectionLinkModal;
