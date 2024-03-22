import React from "react";
import { FormLabel, FormDescription, FormItem } from "@ulld/tailwind/form";
import { Checkbox } from "@ulld/tailwind/checkbox";

interface LabeledCheckboxInputProps {
    value: boolean;
    toggle: () => void;
    label: React.ReactNode;
    desc?: React.ReactNode
}

export const LabeledCheckboxInput = ({
    value,
    toggle,
    label,
    desc,
}: LabeledCheckboxInputProps) => {
    return (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
            <Checkbox checked={value} onCheckedChange={toggle} />
            <div className="space-y-1 leading-none">
                <FormLabel>{label}</FormLabel>
                {desc && <FormDescription>{desc}</FormDescription>}
            </div>
        </FormItem>
    );
};

LabeledCheckboxInput.displayName = "LabeledCheckboxInput";
