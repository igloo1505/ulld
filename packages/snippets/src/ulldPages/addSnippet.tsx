"use client"
import React, { Suspense } from "react";
import { AddSnippetPageProps } from "../types";
import { z } from "zod";
import {useForm, zodResolver} from "@ulld/full-form/form"
import AddSnippetForm from "../components/forPages/addSnippet/addSnippetForm"
import AddSnippetDisplay from "../components/forPages/addSnippet/addSnippetDisplay"
import shikiLanguages, { ShikiLanguage } from "@ulld/utilities/shikiLanguages"
 

export interface PageProps extends AddSnippetPageProps { }

export const SnippetCreatekeywordsInputObjectSchema = z
    .object({
        set: z.string().array(),
    })
    .strict();

const Schema = z
    .object({
        content: z.string(),
        description: z.string(),
        keywords: z
            .union([
                z.lazy(() => SnippetCreatekeywordsInputObjectSchema),
                z.string().array(),
            ]),
        keywordInput: z.string().optional(),
        language: z.enum(shikiLanguages).default("typescript"),
        id: z.number().int().optional()
    })

const AddSnippetPage = ({editing: item}: PageProps) => {

    const form = useForm<z.infer<typeof Schema>>({
        resolver: zodResolver(Schema),
        defaultValues: {
            content: item?.content || "",
            description: item?.description || "",
            keywords: item?.keywords || [],
            keywordInput: "",
            language: item?.language ? item.language as ShikiLanguage : "typescript",
            ...(item?.id && { id: item.id })
        },
    })

    return (
        <div className={"w-full flex flex-col-reverse md:grid md:grid-cols-2 md:gap-6 my-8"}>
            <AddSnippetForm form={form} />
            <Suspense>
                <AddSnippetDisplay
                    language={form.watch("language") as typeof shikiLanguages[number]}
                    content={form.watch("content")}
                />
            </Suspense>
        </div>
    )
};

AddSnippetPage.displayName = "AddSnippetPage";

export default AddSnippetPage;
