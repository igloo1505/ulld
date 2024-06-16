import React, { ReactNode, useState } from "react";
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
            <DialogContent className={"w-[min(768px,90vw)] max-w-[min(768px,90vw)]"}>
                <DialogHeader>
                    <DialogTitle>{label || "Set Theme"}</DialogTitle>
                    {desc && <DialogDescription>{desc}</DialogDescription>}
                </DialogHeader>
                <Form {...form}>
                    <form
                        className={
                            "w-[calc(min(768px,90vw)-64px)] max-w-[calc(min(768px,90vw)-64px)] space-y-6"
                        }
                        onSubmit={form.handleSubmit(onAccept)}
                    >
                        <ComboboxInput
                            label={targetTheme === "dark" ? "Dark Mode" : "Light Mode"}
                            name={targetTheme}
                            options={options}
                            classes={{
                                popoverContent: "overflow-y-auto min-scrollbar w-[300px]",
                                formItem: "w-[300px]",
                                button: "w-[300px]",
                                commandList: "w-[300px]"
                            }}
                        />
                        <CodeThemeModalPreview
                            content={defaultPythonSampleCode}
                            themeMode={targetTheme}
                        />
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
