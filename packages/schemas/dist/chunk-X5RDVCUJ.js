import {
  KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema
} from "./chunk-7JJGI24Q.js";

// src/database/inputTypeSchemas/KanBanListUncheckedCreateInputSchema.ts
import { z } from "zod";
var KanBanListUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  indexWithinBoard: z.number().int(),
  title: z.string().optional().nullable(),
  boardId: z.number().int().optional().nullable(),
  cards: z.lazy(() => KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema).optional()
}).strict();
var KanBanListUncheckedCreateInputSchema_default = KanBanListUncheckedCreateInputSchema;

export {
  KanBanListUncheckedCreateInputSchema,
  KanBanListUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-X5RDVCUJ.js.map