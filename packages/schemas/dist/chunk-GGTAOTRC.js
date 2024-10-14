// src/database/inputTypeSchemas/KanBanCardUncheckedCreateWithoutKanBanListInputSchema.ts
import { z } from "zod";
var KanBanCardUncheckedCreateWithoutKanBanListInputSchema = z.object({
  id: z.number().int().optional(),
  indexWithinList: z.number().int(),
  label: z.string().optional().nullable(),
  details: z.string().optional().nullable()
}).strict();
var KanBanCardUncheckedCreateWithoutKanBanListInputSchema_default = KanBanCardUncheckedCreateWithoutKanBanListInputSchema;

export {
  KanBanCardUncheckedCreateWithoutKanBanListInputSchema,
  KanBanCardUncheckedCreateWithoutKanBanListInputSchema_default
};
//# sourceMappingURL=chunk-GGTAOTRC.js.map