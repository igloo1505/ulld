"use client";
import React from "react";
import {
    FilePathInputProps,
    FilePathInput,
} from "@ulld/full-form/filePathInput";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import { DialogWithForm } from "../utils/dialogWithForm";
import { Button } from "@ulld/tailwind/button";
import { useForm, zodResolver } from "@ulld/full-form/form";
import { useFilePathInputModalState } from "@ulld/hooks/useFilePathInputModal";

interface FilePathInputModalProps<T extends FieldValues>
    extends FilePathInputProps<T> { 
    inputId: string | number
}

const filePathSchema = z.object({
    filePath: z.string(),
});

type FilePathSchemaType = z.infer<typeof filePathSchema>;

export const FilePathInputModal = (
    props: FilePathInputModalProps<FilePathSchemaType>,
) => {

    const {config, setConfig, close, updateValue} = useFilePathInputModalState(props.inputId)

    const form = useForm<FilePathSchemaType>({
        resolver: zodResolver(filePathSchema),
    });

    const handleSubmit = (vals: FilePathSchemaType) => { 
        updateValue(vals.filePath.length === 0 ? null : vals.filePath)
    };

    if (!config) {
        return null;
    }

    return (
        <DialogWithForm
            open={Boolean(config)}
            onOpenChange={(newOpen) => {
                if(!newOpen){
                    close()
                }
            }}
            form={form}
            isModal={true}
            title="Create a new To-Do list"
            onSubmit={handleSubmit}
            withButtons={false}
        >
            <FilePathInput
                {...config}
                name="filePath"
            />
            <div className={"w-full flex flex-row justify-end items-center px-4"}>
                <Button
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        handleSubmit(form.getValues());
                    }}
                >
                    Save
                </Button>
            </div>
        </DialogWithForm>
    );
};

FilePathInputModal.displayName = "FilePathInputModal";
