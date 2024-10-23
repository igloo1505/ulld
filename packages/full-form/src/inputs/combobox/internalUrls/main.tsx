"use client";
import type { ReactNode} from "react";
import React, { useMemo } from "react";
import type { FieldValues } from "react-hook-form";
import { useAppConfig } from "@ulld/hooks/useAppConfig";
import { internalAppLocations } from "@ulld/utilities/internalAppLocations";
import type { AppConfigSchemaOutput } from "@ulld/configschema/types";
import { internalGlobalActionMap } from "@ulld/state/globalActionsMap";
import {
    ComboboxInput
} from "../general/main";
import type {
    ComboboxInputProps,
    Option as DefaultOptionType} from "../general/main";

type AdditionalOptionFields = DefaultOptionType<string> & {
    type: "action" | "url";
};

type Option<T extends FieldValues> = ComboboxInputProps<
    T,
    string,
    AdditionalOptionFields
>["options"][number];

const getInternalLocationFromNoteType = <T extends FieldValues>(
    noteType: AppConfigSchemaOutput["noteTypes"][number],
): Option<T> => {
    return {
        label: noteType.label,
        value: noteType.url,
        type: "url",
    };
};

type OnChangeCallback<T extends FieldValues> = (val: Option<T>) => void;

export type InternalLocationsComboboxProps<T extends FieldValues> = Omit<
    ComboboxInputProps<T, string, AdditionalOptionFields>,
    "options"
> & {
    onChange: OnChangeCallback<T>;
    includeActions?: boolean;
};

export const InternalLocationsCombobox = <T extends FieldValues>({
    includeActions = true,
    ...props
}: InternalLocationsComboboxProps<T>): ReactNode => {
    const [appConfig] = useAppConfig();

    const options = useMemo((): Option<T>[] => {
        let _opts: Option<T>[] = [];
        if (includeActions) {
            for (const k of Object.keys(internalGlobalActionMap)) {
                _opts.push({
                    label: internalGlobalActionMap[k as keyof typeof internalGlobalActionMap].label,
                    value: k,
                    type: "action",
                });
            }
        }
        _opts = _opts.concat(
            internalAppLocations.map(
                (a): Option<T> => ({
                    label: a.label,
                    value: a.url,
                    type: "url",
                }),
            ),
        );
        if (appConfig) {
            _opts = _opts.concat(
                appConfig.noteTypes.map((n) => getInternalLocationFromNoteType(n)),
            );
        }
        return _opts;
    }, [appConfig, includeActions]);

    return (
        <ComboboxInput
            {...props}
            allowOtherInput={
                typeof props.allowOtherInput === "boolean"
                    ? props.allowOtherInput
                    : true
            }
            onSelectOverride={(val) => {
                if (typeof val === "string") {
                    const foundVal = options.find((f) => f.value === val);
                    if (foundVal) {
                        props.onChange(foundVal);
                        return;
                    }
                    props.onChange({
                        label: "",
                        value: val,
                        type: "url"
                    }); return;
                } 
                    props.onChange(val);
                
            }}
            options={options}
        />
    );
};

InternalLocationsCombobox.displayName = "ComboboxInput";
