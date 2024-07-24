import { OnSyncOptions } from "@ulld/types";
import { z, ZodType } from "zod";

export const syncOptionsSchema: ZodType<OnSyncOptions> = z.object({
    offline: z.boolean(),
    removeIfNotInFs: z.boolean().optional().nullable(),
    cleanBeforeSync: z.boolean().optional()
});
