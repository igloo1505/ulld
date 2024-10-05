import { z } from "zod";

export const tableTextStyleSchema = z.union([
    z.literal("base"),
    z.literal("lg"),
    z.literal("xl"),
    z.literal("small"),
])

export const frontMatterTableStylesSchema = z.object({
    fullWidth: z.boolean().optional(),
    text: tableTextStyleSchema.or(z.null()).default("base"),
    math: tableTextStyleSchema.or(z.null()).default("base"),
    tableCenter: z.boolean().nullish(),
    textCenter: z.boolean().nullish(),
    headingCenter: z.boolean().nullish(),
    float: z.union([z.literal("right"), z.literal("left")]).nullish(),
    noMax: z.boolean().nullish(),
    expand: z.boolean().nullish(),
});

export const frontMatterTypeSchema = z.object({
    title: z.string().nullish(),
    created: z.string().nullish(),
    updated: z.string().nullish(),
    summary: z.string().nullish(),
    subjects: z.string().or(z.string().array()).nullish(),
    topics: z.string().or(z.string().array()).nullish(),
    tags: z.string().or(z.string().array()).nullish(),
    importantValues: z.number().array().nullish(),
    id: z.string().nullish(),
    sequential: z.number().optional(),
    sequentialKey: z.string().optional(),
    tableStyles: frontMatterTableStylesSchema.default({}),
});


export const extendedFrontMatterSchema = frontMatterTypeSchema.and(z.record(z.string(), z.any()))
