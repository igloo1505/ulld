"use client";
import React, { useMemo } from "react";
import { FieldValues } from "react-hook-form";
import {
    ComboboxInput,
    ComboboxInputProps,
    Option as DefaultOptionType,
} from "../general/main";
import { useAppConfig } from "@ulld/hooks/useAppConfig";
import { internalAppLocations } from "@ulld/utilities/appData";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";
import { internalGlobalActionMap } from "@ulld/state/globalActionsMap";

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
}: InternalLocationsComboboxProps<T>) => {
    const [appConfig] = useAppConfig();

    const options = useMemo((): Option<T>[] => {
        let _opts: Option<T>[] = [];
        if (includeActions) {
            for (const k of Object.keys(internalGlobalActionMap)) {
                _opts.push({
                    label: internalGlobalActionMap[k].label,
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
                appConfig?.noteTypes.map((n) => getInternalLocationFromNoteType(n)),
            );
        }
        return _opts;
    }, [appConfig]);

    return (
        <ComboboxInput
            {...props}
            onSelectOverride={(val) => {
                if (typeof val === "string") {
                    let foundVal = options.find((f) => f.value === val);
                    if (foundVal) {
                        props.onChange(foundVal);
                        return;
                    }
                    return props.onChange({
                        label: "",
                        value: val,
                        type: "url"
                    })
                } else {
                    return props.onChange(val);
                }
            }}
            options={options}
            allowOtherInput={
                typeof props.allowOtherInput === "boolean"
                    ? props.allowOtherInput
                    : true
            }
        />
    );
};

InternalLocationsCombobox.displayName = "ComboboxInput";
