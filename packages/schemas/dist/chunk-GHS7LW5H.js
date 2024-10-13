// src/database/inputTypeSchemas/KanBanCardCreateManyInputSchema.ts
import { z } from "zod";
var KanBanCardCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  listId: z.number().int().optional().nullable(),
  indexWithinList: z.number().int(),
  label: z.string().optional().nullable(),
  details: z.string().optional().nullable()
}).strict();
var KanBanCardCreateManyInputSchema_default = KanBanCardCreateManyInputSchema;

export {
  KanBanCardCreateManyInputSchema,
  KanBanCardCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-GHS7LW5H.js.map