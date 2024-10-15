import { z } from "zod";
import { zodOptNum, zodOptStr } from "../../utilitySchemas/main.js";
import { zodFrontMatterTableStylesObject } from "./tableStyles.js";
// TODO: Move json specific stuff to schemas package.
const jsonSerializableQuantity = z.union([
    z.boolean(),
    z.string(),
    z.number(),
    z.null()
]);
const superJsonSerializableQuantity = jsonSerializableQuantity.or(z.union([
    z.undefined(),
    z.date(),
    z.instanceof(RegExp),
    z.instanceof(Error),
    z.instanceof(URL),
]));
export const jsonSerializableValue = z.union([
    jsonSerializableQuantity,
    z.record(z.string(), jsonSerializableQuantity),
    z.record(z.string(), z.record(z.string(), jsonSerializableQuantity)),
    z.record(z.string(), jsonSerializableQuantity).array(),
    jsonSerializableQuantity.array(),
    jsonSerializableQuantity.array().array(),
]);
export const frontMatterSchema = z.object({
    title: z.string().nullish(),
    created: zodOptStr,
    updated: zodOptStr,
    summary: zodOptStr,
    subjects: z
        .union([z.string(), z.string().array()])
        .transform((a) => Array.isArray(a) ? a.map((l) => String(l)) : [String(a)])
        .default([]),
    topics: z
        .union([z.string(), z.string().array()])
        .transform((a) => Array.isArray(a) ? a.map((l) => String(l)) : [String(a)])
        .default([]),
    tags: z
        .union([z.string(), z.string().array()])
        .transform((a) => Array.isArray(a) ? a.map((l) => String(l)) : [String(a)])
        .default([]),
    importantValues: z.number().array().default([]),
    id: zodOptStr,
    sequential: zodOptNum,
    sequentialKey: zodOptStr,
    tableStyles: zodFrontMatterTableStylesObject.optional(),
});
export const extendedFrontMatterSchema = frontMatterSchema.and(z.record(z.string(), jsonSerializableValue));
