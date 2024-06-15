import React, { ReactNode, useEffect, useState } from "react";
import { useCodeFormState } from "../../forms/codeSettings/useCodeFormState";
import { Button } from "@ulld/tailwind/button";
import { useForm } from "@ulld/full-form/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ComboboxInput, Option } from "@ulld/full-form/combobox";
import { Form } from "@ulld/tailwind/form";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@ulld/tailwind/dialog";
import themes from "@ulld/utilities/shikiThemes";
import { defaultPythonSampleCode } from "./defaultPythonSample";
import { z } from "zod";
import { CodeConfigSchema } from "@ulld/configschema/zod/codeConfig";
import { useEventListener } from "@ulld/hooks/useEventListener";
import { themeModalSchema, CodeThemeModalSchema } from "./schema";
import CodeThemeModalPreview from "./preview";

interface CodeThemeSelectModalProps {
    label?: ReactNode;
    desc?: ReactNode;
    defaultThemes?: CodeConfigSchema["theme"];
}

const options: Option<string>[] = themes.map((a) => ({
    label: a,
    value: a,
}));

const CodeThemeSelectModal = ({
    label,
    desc,
    defaultThemes = {
        dark: "dracula",
        light: "material-theme-lighter",
    },
}: CodeThemeSelectModalProps) => {
    const {
        themeSelectModal: open,
        closeThemeSelectModal: close,
        setGlobalThemeData,
    } = useCodeFormState();
    const [targetTheme, setTargetTheme] = useState<"light" | "dark">("dark");

    const form = useForm<CodeThemeModalSchema>({
        resolver: zodResolver(themeModalSchema),
        defaultValues: defaultThemes,
    });

    useEventListener("set-theme-modal-themes", (e) => {
        if (e.detail.themes) {
            form.setValue("dark", e.detail.themes.dark || defaultThemes.dark);
            form.setValue("light", e.detail.themes.light || defaultThemes.light);
        }
        setTargetTheme(e.detail.targetTheme || "dark");
    });

    const onAccept = (values: z.infer<typeof themeModalSchema>) => {
        setGlobalThemeData(values);
        form.reset();
        close();
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
            <DialogContent className={"lg:w-fit lg:max-w-[calc(100vw-4rem)]"}>
                <DialogHeader>
                    <DialogTitle>{label || "Set Theme"}</DialogTitle>
                    {desc && <DialogDescription>{desc}</DialogDescription>}
                </DialogHeader>
                <Form {...form}>
                    <form
                        className={"w-full space-y-6"}
                        onSubmit={form.handleSubmit(onAccept)}
                    >
                        <div
                            className={"grid grid-cols-1 md:grid-cols-[auto_[300px]] gap-6"}
                        >
                            <ComboboxInput
                                label={targetTheme === "dark" ? "Dark Mode" : "Light Mode"}
                                name={targetTheme}
                                options={options}
                                classes={{
                                    popoverContent: "overflow-y-auto min-scrollbar",
                                }}
                            />
                            <CodeThemeModalPreview
                                content={defaultPythonSampleCode}
                                themeMode={targetTheme}
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

CodeThemeSelectModal.displayName = "CodeThemeSelectModal";

export default CodeThemeSelectModal;
