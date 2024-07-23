"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    ColorGroupType,
    colorGroup,
} from "@ulld/configschema/zod/ui/colorsConfig";
import { useForm } from "@ulld/full-form/form";
import { Form } from "@ulld/tailwind/form";
import React, { useEffect } from "react";
import { useColorFormState } from "../../forms/colors/useColorFormState";
import { staticDocsData } from "#/staticData/docs";
import { ColorInput } from "@ulld/full-form/colorInput";
import { Button } from "@ulld/tailwind/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@ulld/tailwind/dialog";
import Link from "next/link";
import { MobileSheetDesktopDialog } from "@ulld/ui/responsive/DialogMobileSheet";

const EditColorModal = () => {
    const form = useForm<ColorGroupType>({
        resolver: zodResolver(colorGroup),
    });
    const {
        editColorModal,
        colorItems,
        closeEditColorModal: close,
        appendColor,
    } = useColorFormState();
    const open = Boolean(editColorModal);

    useEffect(() => {
        if (editColorModal) {
            let item = colorItems.find((a) => a.colorId === editColorModal);
            if (item) {
                let darkVal =
                    typeof item === "string"
                        ? item
                        : "dark" in item
                            ? item.dark
                            : "light" in item
                                ? item.light
                                : undefined;
                let lightVal =
                    typeof item === "string"
                        ? item
                        : "light" in item
                            ? item.light
                            : "dark" in item
                                ? item.dark
                                : undefined;
                if (darkVal) {
                    form.setValue("dark", darkVal);
                }
                if (lightVal) {
                    form.setValue("light", lightVal);
                }
            }
        }
    }, [editColorModal]);

    const onAccept = (values: ColorGroupType) => {
        if (!editColorModal) return;
        appendColor({
            ...values,
            colorId: editColorModal,
        });
        form.reset();
        close();
    };

    return (
        <MobileSheetDesktopDialog
            open={Boolean(open)}
            onOpenChange={(newOpen) => {
                if (!newOpen) {
                    close();
                }
            }}
            classes={{
                sheet: {
                    footer: "w-full flex flex-row justify-end items-center"
                }
            }}
            breakpoint={1024}
            title={editColorModal}
            desc={
                <>
                    All colors will be available as part of the{" "}
                    <Link
                        className={"text-link"}
                        href={staticDocsData.extendsMap.colorProps.href}
                    >
                        ColorProp
                    </Link>{" "}
                    object.
                </>
            }
            footer={
                <>
                    <Button type="submit">Save</Button>
                </>
            }
        >
            <Form {...form}>
                <form className={"space-y-6"} onSubmit={form.handleSubmit(onAccept)}>
                    <div
                        className={
                            "w-full flex flex-col justify-center items-center gap-6 lg:flex-row lg:justify-around lg:items-center"
                        }
                    >
                        <ColorInput
                            label="Dark Mode"
                            name="dark"
                            classes={{
                                container:
                                    "w-full @[768px]/editColorModal:w-fit @[768px]/editColorModal:min-w-[300px]",
                            }}
                        />
                        <ColorInput
                            label="Light Mode"
                            name="light"
                            classes={{
                                container:
                                    "light w-full @[768px]/editColorModal:w-fit @[768px]/editColorModal:min-w-[300px]",
                            }}
                        />
                    </div>
                </form>
            </Form>
        </MobileSheetDesktopDialog>
    );

    return (
        <Dialog
            open={Boolean(open)}
            onOpenChange={(newOpen) => {
                if (!newOpen) {
                    close();
                }
            }}
        >
            <DialogContent
                className={
                    "@container/editColorModal w-[min(768px,90vw)] max-w-[min(768px,90vw)]"
                }
            >
                <DialogHeader>
                    <DialogTitle>{editColorModal}</DialogTitle>
                    <DialogDescription>
                        All colors will be available as part of the{" "}
                        <Link
                            className={"text-link"}
                            href={staticDocsData.extendsMap.colorProps.href}
                        >
                            ColorProp
                        </Link>{" "}
                        object.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form className={"space-y-6"} onSubmit={form.handleSubmit(onAccept)}>
                        <div
                            className={
                                "w-full mt-6 flex flex-col justify-center items-center gap-6 lg:flex-row lg:justify-around lg:items-center"
                            }
                        >
                            <ColorInput
                                label="Dark Mode"
                                name="dark"
                                classes={{
                                    container:
                                        "w-full @[768px]/editColorModal:w-fit @[768px]/editColorModal:min-w-[300px]",
                                }}
                            />
                            <ColorInput
                                label="Light Mode"
                                name="light"
                                classes={{
                                    container:
                                        "light w-full @[768px]/editColorModal:w-fit @[768px]/editColorModal:min-w-[300px]",
                                }}
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

EditColorModal.displayName = "EditColorModal";

export default EditColorModal;
