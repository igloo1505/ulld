// src/database/inputTypeSchemas/KanBanListUncheckedCreateWithoutCardsInputSchema.ts
import { z } from "zod";
var KanBanListUncheckedCreateWithoutCardsInputSchema = z.object({
  id: z.number().int().optional(),
  indexWithinBoard: z.number().int(),
  title: z.string().optional().nullable(),
  boardId: z.number().int().optional().nullable()
}).strict();
var KanBanListUncheckedCreateWithoutCardsInputSchema_default = KanBanListUncheckedCreateWithoutCardsInputSchema;

export {
  KanBanListUncheckedCreateWithoutCardsInputSchema,
  KanBanListUncheckedCreateWithoutCardsInputSchema_default
};
//# sourceMappingURL=chunk-T5N47SQK.js.map