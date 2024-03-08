"use client"
import { serverClient } from '#/trpc/serverClient'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { Suspense } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import AddSnippetDisplay from './addSnippetDisplay'
import AddSnippetForm from './form'
import { SnippetCreatekeywordsInputObjectSchema, TechnologiesSchema } from '#/zod/local/SnippetCreateInputObjectSchema'
import { Prisma } from '@prisma/client'



interface AddSnippetFormProps {
    item: Awaited<ReturnType<typeof serverClient.getSpecificSnippet>> | null
}


const Schema: z.ZodType<Required<Prisma.SnippetCreateInput> & { keywordInput?: string }> = z
    .object({
        content: z.string(),
        description: z.string(),
        keywords: z
            .union([
                z.lazy(() => SnippetCreatekeywordsInputObjectSchema),
                z.string().array(),
            ]),
        keywordInput: z.string().optional(),
        language: z.lazy(() => TechnologiesSchema),
        id: z.number().int().optional()
    })
    .strict();

const AddSnippetFormWrapper = ({ item }: AddSnippetFormProps) => {

    const form = useForm<z.infer<typeof Schema>>({
        resolver: zodResolver(Schema),
        defaultValues: {
            content: item?.content || "",
            description: item?.description || "",
            keywords: item?.keywords || [],
            keywordInput: "",
            language: item?.language ? item.language : "typescript",
            ...(item?.id && { id: item.id })
        },
    })

    return (
        <div className={"w-full flex flex-col-reverse md:grid md:grid-cols-2 md:gap-6 my-8"}>
            <AddSnippetForm form={form} />
            <Suspense>
                <AddSnippetDisplay form={form} />
            </Suspense>
        </div>
    )
}


AddSnippetFormWrapper.displayName = "AddSnippetForm"


export default AddSnippetFormWrapper;
