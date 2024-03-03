import { z } from "zod"

export const createKanBanFormDataSchema = z.object({
    title: z.string().min(6, "Title must be longer."),
    subjects: z.string().array(),
    topics: z.string().array(),
    tags: z.string().array(),
})


export const createKanBanSchemaInputs = z.object({
    subjectInput: z.string(),
    topicInput: z.string(),
    tagInput: z.string(),
})
