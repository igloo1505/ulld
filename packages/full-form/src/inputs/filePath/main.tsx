"use client"
import React, { useEffect, useState } from "react";
import { filePathGlobPropsSchema } from "@ulld/utilities/filePathSchemas";
import { z } from "zod";
import { ComboboxInput, ComboboxInputProps } from "../combobox/general/main";
import { client } from "@ulld/api/client";
import { FieldValues } from "react-hook-form";

interface FilePathInputProps<T extends FieldValues>
    extends Omit<z.input<typeof filePathGlobPropsSchema>, "returnAs">,
    Omit<ComboboxInputProps<T, string>, "options"> {}



const FilePathInput = <T extends FieldValues>({
    glob,
    type,
    ignore,
    ...props
}: FilePathInputProps<T>) => {

    const [options, setOptions] = useState<{ label: string; value: string }[]>([]);

    const gatherOptions = async (
        g: Pick<FilePathInputProps<T>, "glob" | "type" | "ignore">,
    ) => {
        console.log("gatheringOptions")
        debugger
        let res = await client.fsUtils.getFsRootGlob.query({
            ...g,
            returnAs: "rootRelative"
        });
        console.log("res: ", res)
        setOptions(res.map((x) => ({
            value: x,
            label: x
        })))
    };

    useEffect(() => {
        gatherOptions({ glob, type, ignore });
    }, [glob, type, ignore]);

    return <ComboboxInput {...props} options={options} />;
};

FilePathInput.displayName = "FilePathInput";

export default FilePathInput;
