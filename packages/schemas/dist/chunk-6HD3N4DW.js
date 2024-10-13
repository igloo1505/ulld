import {
  KanbanUpdateOneWithoutListsNestedInputSchema
} from "./chunk-LE2EVO57.js";
import {
  KanBanCardUpdateManyWithoutKanBanListNestedInputSchema
} from "./chunk-FCWXFJH4.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";

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
//# sourceMappingURL=chunk-6HD3N4DW.js.map