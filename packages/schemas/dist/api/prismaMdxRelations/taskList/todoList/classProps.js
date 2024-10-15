import { z } from 'zod';
import { readingListZodObject } from "../../readingList/classProps.js";
import { taggableFields } from "../../taggables/taggableFields.js";
export const todoListZodObject = z
    .object({
    id: z.number().int(),
    label: z.string(),
    tasks: z.any().array().default([]),
})
    .merge(readingListZodObject.pick({
    createdAt: true,
    lastUpdate: true,
}))
    .merge(taggableFields);
