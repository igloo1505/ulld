"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import LocalDevelopmentPageWrapper from "@ulld/utilities/localDevelopmentPageWrapper";
import React from "react";
import { useForm } from "react-hook-form";
import { Form } from "@ulld/tailwind/form";
import { z } from "zod";
import { FilePathInput } from "../../inputs/filePath/main";

interface FilePathInputProps { }

const testSchema = z.object({
    fp: z.string(),
});

const FilePathInputPage = (props: FilePathInputProps) => {
    const form = useForm<z.infer<typeof testSchema>>({
        resolver: zodResolver(testSchema),
    });

    return (
        <LocalDevelopmentPageWrapper>
            <Form {...form}>
                <FilePathInput
                    name="fp"
                    glob="**/*.pdf"
                    label="File path"
                    classes={{
                        formItem: "min-w-[300px]",
                        button: "w-full",
                        popoverContent: "w-fit max-w-[90vw]",
                    }}
                />
            </Form>
        </LocalDevelopmentPageWrapper>
    );
};

FilePathInputPage.displayName = "FilePathInputPage";

export default FilePathInputPage;
