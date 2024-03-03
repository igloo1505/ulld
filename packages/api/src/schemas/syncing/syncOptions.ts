import { z } from "zod";

export const syncOptionsSchema = z.object({
    offline: z.boolean().optional(),
    removeIfNotInFs: z.boolean().optional().nullable(),
    cleanBeforeSync: z.boolean().optional()
})


export type SyncOptions = z.infer<typeof syncOptionsSchema>
