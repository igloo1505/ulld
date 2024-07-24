import { zodOptBool, zodOptStr, zodOptNum } from '@ulld/utilities/schemas/utility'
import { z, ZodTypeAny } from 'zod'
import {FrontMatterType} from "@ulld/types"


const zodFMTextStyle = z.enum([
    "base", "lg", "xl", "small"
])

const zodTableStylesObject = z.object({
    fullWidth: zodOptBool(false),
    text: zodFMTextStyle.optional().nullable(),
    math: zodFMTextStyle.optional().nullable(),
    tableCenter: zodOptBool(false),
    textCenter: zodOptBool(false),
    headingCenter: zodOptBool(false),
    float: z.enum(["right", "left"]).optional().nullable(),
    noMax: zodOptBool(false),
    expand: zodOptBool(false)
})


const fields: Record<keyof FrontMatterType<{}>, ZodTypeAny> = {
    title: z.string().nullish(),
    created: zodOptStr,
    updated: zodOptStr,
    summary: zodOptStr,
    subjects: z.union([z.string(), z.string().array(), z.number(), z.number().array()]).transform((a) => Array.isArray(a) ? a.map((l) => String(l)) : [String(a)]).default([]),
    topics: z.union([z.string(), z.string().array(), z.number(), z.number().array()]).transform((a) => Array.isArray(a) ? a.map((l) => String(l)) : [String(a)]).default([]),
    tags: z.union([z.string(), z.string().array(), z.number(), z.number().array()]).transform((a) => Array.isArray(a) ? a.map((l) => String(l)) : [String(a)]).default([]),
    importantValues: z.number().array().optional().nullable(),
    id: zodOptStr,
    // protected: z.boolean().default(false),
    sequential: zodOptNum,
    sequentialKey: zodOptStr,
    tableStyles: zodTableStylesObject.optional(),
    // remote: z.object({
    //     url: zodOptStr,
    //     track: zodOptBool(true)
    // }).nullish()
}

export const zodFrontMatterObject = z.object(fields)


export type ZodFrontMatterInput = z.input<typeof zodFrontMatterObject>
export type ZodFrontMatterOutput = z.output<typeof zodFrontMatterObject>
