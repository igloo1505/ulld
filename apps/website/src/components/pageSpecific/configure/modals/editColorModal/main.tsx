import { zodResolver } from "@hookform/resolvers/zod";
import {
    ColorGroupType,
    colorGroup,
} from "@ulld/configschema/zod/ui/colorsConfig";
import { Form, useForm } from "@ulld/full-form/form";
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
import { Link } from "lucide-react";


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
        if(!editColorModal) return
        appendColor({
            ...values,
            colorId: editColorModal
        })
        form.reset()
        close()
    };

    return (
        <Dialog
            open={Boolean(open)}
            onOpenChange={(newOpen) => {
                if (!newOpen) {
                    close();
                }
            }}
        >
            <DialogContent className={"w-[min(768px,90vw)] max-w-[min(768px,90vw)]"}>
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
                                "w-full lg:flex lg:flex-row lg:justify-around lg:items-center"
                            }
                        >
                            <ColorInput
                                label="Dark Mode"
                                name="dark"
                                classes={{
                                    container: "w-fit min-w-[300px]",
                                }}
                            />
                            <ColorInput
                                label="Light Mode"
                                name="light"
                                classes={{
                                    container: "light w-fit min-w-[300px]",
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
