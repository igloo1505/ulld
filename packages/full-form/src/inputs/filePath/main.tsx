"use client"
import React, { useEffect, useState, useMemo } from "react";
import { filePathGlobPropsSchema } from "@ulld/utilities/filePathSchemas";
import { z } from "zod";
import { ComboboxInput, ComboboxInputProps } from "../combobox/general/main";
import { client } from "@ulld/api/client";
import { FieldValues } from "react-hook-form";
import { getRandomId } from "@ulld/utilities/identity";

export interface FilePathInputProps<T extends FieldValues>
    extends Omit<z.input<typeof filePathGlobPropsSchema>, "returnAs">,
    Omit<ComboboxInputProps<T, string>, "options"> {}


export const FilePathInput = <T extends FieldValues>({
    glob,
    type,
    ignore,
    ...props
}: FilePathInputProps<T>) => {

    const [options, setOptions] = useState<{ label: string; value: string }[]>([]);
    const [maxLength, setMaxLength] = useState(0)

    const _id = useMemo(() => getRandomId(), [])

    const [initialWidth, setInitialWidth] = useState(0)

    const gatherOptions = async (
        g: Pick<FilePathInputProps<T>, "glob" | "type" | "ignore">,
    ) => {
        let res = await client.fsUtils.getFsRootGlob.query({
            ...g,
            returnAs: "rootRelative"
        });
        setOptions(res.map((x) => ({
            value: x,
            label: x
        })))
        setMaxLength(res.sort((a, b) => b.length - a.length)[0].length)
    };

    useEffect(() => {
        gatherOptions({ glob, type, ignore });
    }, [glob, type, ignore]);

    return <ComboboxInput
        {...props}
        options={options}
        styles={{
            popoverContent: {
                width: `min(${maxLength + 2}ch, calc(100vw - 2rem))`
            }
        }}
    />;
};

FilePathInput.displayName = "FilePathInput";
