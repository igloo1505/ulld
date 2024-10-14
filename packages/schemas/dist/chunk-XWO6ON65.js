// src/database/inputTypeSchemas/KanBanCardUncheckedCreateInputSchema.ts
import { z } from "zod";
var KanBanCardUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  listId: z.number().int().optional().nullable(),
  indexWithinList: z.number().int(),
  label: z.string().optional().nullable(),
  details: z.string().optional().nullable()
}).strict();
var KanBanCardUncheckedCreateInputSchema_default = KanBanCardUncheckedCreateInputSchema;

export {
  KanBanCardUncheckedCreateInputSchema,
  KanBanCardUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-XWO6ON65.js.map