import { z } from "zod";
import { zodDocTypeInput } from "../zod/documentConfigSchema.js";
import { internalDocTypes } from "../zod/internalDocumentTypes.js";
// TODO: Remove all references to this file. Everything was moved to the schemas package.


export type DocTypes =
    | string
    | z.output<typeof zodDocTypeInput>
    | z.output<typeof internalDocTypes>;

export const topicZodObject = z.object({
    value: z.string(),
});
export const subjectZodObject = z.object({
    value: z.string(),
});

const _tagZodObject = z.object({
    value: z.string(),
    kanbanId: z.union([z.number().int(), z.null(), z.undefined()]).optional(),
});

export const tagZodObject = z.union([
    _tagZodObject,
    z.string().transform((a) => _tagZodObject.parse({ value: a })),
]);

export type TopicZodOutput = z.output<typeof topicZodObject>;
export type SubjectZodOutput = z.output<typeof subjectZodObject>;
export type TagZodOutput = z.output<typeof tagZodObject>;
