import { autoSetting } from "@ulld/database";
import { z } from "zod";

export const AutoPropertyFormSchema = z.object({
    glob: z.string(),
    value: z.string(),
    type: z.nativeEnum(autoSetting),
    id: z.number().int().optional()
})
