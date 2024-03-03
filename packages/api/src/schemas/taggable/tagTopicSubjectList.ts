
import { z } from 'zod'

export const tagTopicSubjectList = z.object({
    tags: z.string().array(),
    subjects: z.string().array(),
    topics: z.string().array()
})


export type TagTopicSubjectList = z.infer<typeof tagTopicSubjectList>
