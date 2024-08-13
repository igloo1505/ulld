"use client";
import React, { useEffect, useState } from "react";
import { filePathGlobPropsSchema } from "@ulld/utilities/filePathSchemas";
import { z } from "zod";
import { ComboboxInput, ComboboxInputProps } from "../combobox/general/main";
import { FieldValues } from "react-hook-form";
import { getFsRootGlob } from "@ulld/utilities/fsUtils";

export interface FilePathInputProps<T extends FieldValues>
    extends Omit<z.input<typeof filePathGlobPropsSchema>, "returnAs">,
    Omit<ComboboxInputProps<T, string>, "options"> { }

export const FilePathInput = <T extends FieldValues>({
    glob,
    type,
    ignore,
    ...props
}: FilePathInputProps<T>) => {
    const [options, setOptions] = useState<{ label: string; value: string }[]>(
        [],
    );
    /* const [maxLength, setMaxLength] = useState(0); */

    const gatherOptions = async (
        g: Pick<FilePathInputProps<T>, "glob" | "type" | "ignore">,
    ) => {
        let res = await getFsRootGlob({
            ...g,
            returnAs: "rootRelative",
        });
        if (res) {
            setOptions(
                res.map((x) => ({
                    value: x,
                    label: x,
                })),
            );
            /* setMaxLength(res.sort((a, b) => b.length - a.length)[0].length); */
        } else {
            console.warn(`Could not gather paths in getFsRootGlob function.`)
        }
    };

    useEffect(() => {
        gatherOptions({ glob, type, ignore });
    }, [glob, type, ignore]);

    return (
        <ComboboxInput
            {...props}
            options={options}
            /* styles={{ */
                /* popoverContent: { */
                    /* width: `min(${maxLength + 2}ch, calc(100vw - 2rem))`, */
                /* }, */
            /* }} */
        />
    );
};

FilePathInput.displayName = "FilePathInput";
