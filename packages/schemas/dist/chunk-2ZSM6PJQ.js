import {
  KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema
} from "./chunk-7JJGI24Q.js";

// src/database/inputTypeSchemas/KanBanListUncheckedCreateWithoutKanbanInputSchema.ts
import { z } from "zod";
var KanBanListUncheckedCreateWithoutKanbanInputSchema = z.object({
  id: z.number().int().optional(),
  indexWithinBoard: z.number().int(),
  title: z.string().optional().nullable(),
  cards: z.lazy(() => KanBanCardUncheckedCreateNestedManyWithoutKanBanListInputSchema).optional()
}).strict();
var KanBanListUncheckedCreateWithoutKanbanInputSchema_default = KanBanListUncheckedCreateWithoutKanbanInputSchema;

export {
  KanBanListUncheckedCreateWithoutKanbanInputSchema,
  KanBanListUncheckedCreateWithoutKanbanInputSchema_default
};
//# sourceMappingURL=chunk-2ZSM6PJQ.js.map