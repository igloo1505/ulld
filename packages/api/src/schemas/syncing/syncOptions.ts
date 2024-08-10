import { OnSyncOptions } from "@ulld/types";
import { z, ZodType } from "zod";

export const syncOptionsSchema: ZodType<OnSyncOptions> = z.object({
    offline: z.coerce.boolean(),
    removeIfNotInFs: z.coerce.boolean().optional().nullable(),
    cleanBeforeSync: z.coerce.boolean().optional(),
    bibId: z.coerce.number().int().min(1).default(1)
});
