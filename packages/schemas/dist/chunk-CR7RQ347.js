import {
  KanbanUpdateOneWithoutListsNestedInputSchema
} from "./chunk-KODE43QT.js";
import {
  KanBanCardUpdateManyWithoutKanBanListNestedInputSchema
} from "./chunk-RE3I7445.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";

// src/database/inputTypeSchemas/KanBanListUpdateInputSchema.ts
import { z } from "zod";
var KanBanListUpdateInputSchema = z.object({
  indexWithinBoard: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  cards: z.lazy(() => KanBanCardUpdateManyWithoutKanBanListNestedInputSchema).optional(),
  Kanban: z.lazy(() => KanbanUpdateOneWithoutListsNestedInputSchema).optional()
}).strict();
var KanBanListUpdateInputSchema_default = KanBanListUpdateInputSchema;

export {
  KanBanListUpdateInputSchema,
  KanBanListUpdateInputSchema_default
};
//# sourceMappingURL=chunk-CR7RQ347.js.map