import { z } from 'zod';
import { bibEntryPropsSchema } from '../bib/bibEntry/classProps.js';
import { withForwardSlash } from '@ulld/utilities/fsUtils';
import { makeValidIdOnlyLetters, } from "@ulld/utilities/utils/identity";
import { todoTaskZodObject } from '../taskList/todo/classProps.js';
import { taggableFields } from '../taggables/taggableFields.js';
import { dateTimeStringTransform } from '../../../transforms/index.js';
import { sequentialListPropsSchema } from './mdxNoteFieldSchemas.js';
// WARN:You need to handle all of these transformations outside of this object now that the api classes are no longer available in the schemas package.
export const mdxNotePropsSchema = z
    .object({
    content: z.string().nullish(),
    id: z.number().nullish(),
    title: z.string().nullish(),
    latexTitle: z.string().nullish(),
    raw: z.string(),
    floatImages: z.boolean().default(false),
    formatted: z.string().nullish(),
    citations: bibEntryPropsSchema
        .array()
        .default([])
    // .transform((a) => {
    //     return a.map((b) => new BibEntry(b));
    // })
    ,
    importantValues: z.number().array().default([]),
    bookmarked: z.boolean().default(false),
    quickLinkId: z.string().nullish(),
    href: z.string().nullish(),
    citationsListOrder: z.string().array().default([]),
    outgoingQuickLinks: z.string().array().default([]),
    rootRelativePath: z
        .string()
        .nullish()
        .transform((a) => (typeof a === "string" ? withForwardSlash(a) : a)),
    equationIds: z.string().array().default([]),
    isProtected: z.boolean().nullish().default(false),
    sequentialKey: z.string().nullish(),
    sequentialIndex: z.number().nullish(),
    sequentialList: sequentialListPropsSchema.optional(),
    remoteUrl: z.string().nullish(),
    noLog: z.boolean().default(true),
    saveFormatted: z.boolean().default(true),
    noteType: z.string().transform(makeValidIdOnlyLetters),
    trackRemote: z.boolean().default(false),
    toDo: todoTaskZodObject.array().default([]),
    summary: z.string().nullish(),
    firstSync: z
        .union([
        z
            .string()
            .datetime()
            .transform((a) => new Date(a)),
        z.date(),
    ])
        .nullish()
        .transform(dateTimeStringTransform),
    lastSync: z
        .union([
        z
            .string()
            .datetime()
            .transform((a) => new Date(a)),
        z.date(),
    ])
        .nullish()
        .transform(dateTimeStringTransform),
})
    .merge(taggableFields);
