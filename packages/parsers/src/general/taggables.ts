
import { z } from "zod";


export const taggableFieldsAsStrings = z.object({
    topics: z.string()
        .array()
        .default([]),
    subjects: z.string() 
        .array()
        .default([]),
    tags: z.string()
        .array()
        .default([])
});
