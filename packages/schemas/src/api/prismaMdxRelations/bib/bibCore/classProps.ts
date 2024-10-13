import {z} from 'zod'
import { appData } from "@ulld/utilities/appData";

export const bibCoreSchema = z.object({
    firstSync: z
        .union([z.string().datetime(), z.date()])
        .nullish()
        .transform((a) => (typeof a === "string" ? new Date(a) : a)),
    lastAccess: z
        .union([z.string().datetime(), z.date()])
        .nullish()
        .transform((a) => (typeof a === "string" ? new Date(a) : a)),
    filename: z.string().default(appData.buildDefaults.bibFilePath),
    id: z.number().int().default(1),
    entries: z.any().array().default([]),
});
