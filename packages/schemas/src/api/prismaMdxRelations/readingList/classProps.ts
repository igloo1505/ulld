import {z} from 'zod'
import { dateTimeStringTransform } from '../../../transforms/index.js';

export const readingListZodObject = z.object({
    name: z.string(),
    description: z.string().nullable(),
    bibEntries: z.any().array(),
    mdxNotes: z.any().array().default([]),
    ipynbNotes: z.any().array().default([]),
    createdAt: z
        .union([z.string().datetime(), z.date()])
        .nullish()
        .transform(dateTimeStringTransform),
    lastUpdate: z
        .union([z.string().datetime(), z.date()])
        .nullish()
        .transform(dateTimeStringTransform),
});
