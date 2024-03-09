import type { serverClient } from '@ulld/api';
import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod'

export const AddEquationSchema = z.object({
    id: z.number().optional(),
    title: z.string(),
    desc: z.string().optional(),
    content: z.string(),
    equationId: z.string().optional(),
    asPython: z.string().optional(),
    tags: z.string().array().default([]),
    tagInput: z.string(),
    relatedValues: z.object({
        input: z.record(z.string(), z.number()),
        output: z.number()
    }).array().optional(),
    variables: z.string().array(),
    variableInput: z.string(),
    keywords: z.string().array(),
    keywordInput: z.string(),
})


export interface AddEquationInterface {
    title: string;
    content: string;
    tags: string[];
    tagInput: string;
    variables: string[];
    variableInput: string;
    keywords: string[]
    keywordInput: string
    id?: number | undefined;
    desc?: string | undefined;
    equationId?: string | undefined;
    asPython?: string | undefined;
    relatedValues?: {
        input: Record<string, number>;
        output: number;
    }[];
}


export type AddEquationFormType = UseFormReturn<AddEquationInterface, any, undefined>



export type EquationListItem = NonNullable<Awaited<ReturnType<typeof serverClient.equations.getEquationsList>>>["equations"][number]
