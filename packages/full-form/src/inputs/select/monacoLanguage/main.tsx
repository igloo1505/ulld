import React, { useMemo } from "react";
import { FieldValues } from "react-hook-form";
import { BaseInputProps } from "../../types/fullFormInputProps";
import { SelectInput, SelectOption } from "../general/main";
import languages from "@ulld/utilities/monacoLanguages";
import { cn } from "@ulld/utilities/cn";

interface MonacoLanguageSelectProps<T extends FieldValues>
    extends BaseInputProps<T, "formItem" | "selectTrigger"> {
    placeholder?: string;
}

export const MonacoLanguageSelect = <T extends FieldValues>({
    placeholder = "Select a language",
    ...props
}: MonacoLanguageSelectProps<T>) => {
    const options: SelectOption[] = useMemo(
        () =>
            languages.map((l) => ({
                value: l,
                label: l,
            })),
        [],
    );
    return (
        <SelectInput
            {...props}
            classes={{
                selectTrigger: cn("w-[300px]", props.classes?.selectTrigger),
            }}
            placeholder={placeholder}
            options={options}
        />
    );
};

MonacoLanguageSelect.displayName = "MonacoLanguageSelect";
