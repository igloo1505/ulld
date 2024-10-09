"use client";
import React, { useMemo } from "react";
import { FieldValues } from "react-hook-form";
import { ComboboxInput, ComboboxInputProps } from "../general/main";
import { useAppConfig } from "@ulld/hooks/useAppConfig";
import { internalAppLocations } from "@ulld/utilities/appData";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";

type Option<
    T extends FieldValues,
    J extends string | number,
> = ComboboxInputProps<T, J>["options"][number];

const getInternalLocationFromNoteType = <T extends FieldValues>(
    noteType: AppConfigSchemaOutput["noteTypes"][number],
): Option<T, string> => {
    return {
        label: noteType.label,
        value: noteType.url,
    };
};

export const InternalLocationsCombobox = <T extends FieldValues>(
    props: Omit<ComboboxInputProps<T, string>, "options"> & {
        onChange: Omit<ComboboxInputProps<T, string>, "options">["onSelectOverride"];
    },
) => {
    const [appConfig] = useAppConfig();

    const options = useMemo((): Option<T, string>[] => {
        let _opts = internalAppLocations.map(
            (a): Option<T, string> => ({
                label: a.label,
                value: a.url,
            }),
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
            onSelectOverride={props.onChange}
            options={options}
            allowOtherInput={typeof props.allowOtherInput === "boolean" ? props.allowOtherInput : true}
        />
    );
};

InternalLocationsCombobox.displayName = "ComboboxInput";
