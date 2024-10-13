import {
  KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema
} from "./chunk-5G2AO6GC.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";

// src/database/inputTypeSchemas/KanBanListUncheckedUpdateWithoutKanbanInputSchema.ts
import { z } from "zod";
var KanBanListUncheckedUpdateWithoutKanbanInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  indexWithinBoard: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  cards: z.lazy(() => KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema).optional()
}).strict();
var KanBanListUncheckedUpdateWithoutKanbanInputSchema_default = KanBanListUncheckedUpdateWithoutKanbanInputSchema;

export {
  KanBanListUncheckedUpdateWithoutKanbanInputSchema,
  KanBanListUncheckedUpdateWithoutKanbanInputSchema_default
};
//# sourceMappingURL=chunk-FATSFTBR.js.map