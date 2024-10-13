import {
    zodOptStr,
    zodOptNum,
} from "@ulld/utilities/schemas/utility";
import { z } from "zod";

// WARN: This was moved to packages/schemas/src/data/frontMatter/main.ts. Remove this and all references to this file when time and battery permits.

const zodFMTextStyle = z.union([
    z.literal("base"),
    z.literal("lg"),
    z.literal("xl"),
    z.literal("small"),
]);

const zodTableStylesObject = z.object({
    fullWidth: z.boolean().nullish().default(false),
    text: zodFMTextStyle.nullish(),
    math: zodFMTextStyle.nullish(),
    tableCenter: z.coerce.boolean().nullish().default(false),
    textCenter: z.coerce.boolean().nullish().default(false),
    headingCenter: z.coerce.boolean().nullish().default(false),
    float: z.enum(["right", "left"]).nullish(),
    noMax: z.coerce.boolean().nullish().default(false),
    expand: z.coerce.boolean().nullish().default(false),
});

// TODO: Move this to the schemas package. Remove this and rely only on a zodFrontMatter object in the schemas package.
export const zodFrontMatterObject = z.object({
    title: z.string().nullish(),
    created: zodOptStr,
    updated: zodOptStr,
    summary: zodOptStr,
    subjects: z
        .union([z.string(), z.string().array()])
        .transform((a) =>
            Array.isArray(a) ? a.map((l) => String(l)) : [String(a)],
        )
        .default([]),
    topics: z
        .union([z.string(), z.string().array()])
        .transform((a) =>
            Array.isArray(a) ? a.map((l) => String(l)) : [String(a)],
        )
        .default([]),
    tags: z
        .union([z.string(), z.string().array()])
        .transform((a) =>
            Array.isArray(a) ? a.map((l) => String(l)) : [String(a)],
        )
        .default([]),
    importantValues: z.number().array().default([]),
    id: zodOptStr,
    // protected: z.boolean().default(false),
    sequential: zodOptNum,
    sequentialKey: zodOptStr,
    tableStyles: zodTableStylesObject.optional(),
    // remote: z.object({
    //     url: zodOptStr,
    //     track: zodOptBool(true)
    // }).nullish()
});


export type ZodFrontMatterInput = z.input<typeof zodFrontMatterObject>;
export type ZodFrontMatterOutput = z.output<typeof zodFrontMatterObject>;
