import React from "react";
import shikiThemes from "@ulld/utilities/shikiThemes";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogPortal,
    DialogTitle,
} from "@ulld/tailwind/dialog";

interface ShikiThemeSelectProps {
    value?: BundledTheme;
    onChange: (newValue: BundledTheme) => void;
    open: boolean;
    onOpenChange: (isOpen: boolean) => void;
}

const ShikiThemeSelect = ({
    onChange,
    open,
    onOpenChange,
    value = "dracula",
}: ShikiThemeSelectProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className={"pr-0"}>
            <DialogHeader>
                <DialogTitle>Theme</DialogTitle>
            </DialogHeader>
                <div className={"max-h-[min(60vh,400px)] overflow-y-auto min-scrollbar"}>
                {shikiThemes.map((a) => {
                    return <li
                            onClick={() => onChange(a)}
                            className={"py-2 w-auto border-b list-none select-none cursor-pointer flex flex-row justify-start items-center hover:bg-muted/50 mr-2"}
                            key={a}
                        >
                            <span className={"w-8 h-full inline-block"}>{value === a && <CheckIcon className={"w-4 h-4"}/>}</span>
                            <span>
                            {a}
                            </span>
                        </li>;
                })}
                </div>
            </DialogContent>
        </Dialog>
    );
};

ShikiThemeSelect.displayName = "ShikiThemeSelect";

export default ShikiThemeSelect;
import { z } from "zod";
import { useForm } from "@ulld/full-form/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardHeader, CardTitle } from "@ulld/tailwind/card";
import { BundledTheme } from "shiki";import { CheckIcon } from "lucide-react";

