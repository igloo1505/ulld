import {
  KanbanUpdateOneWithoutListsNestedInputSchema
} from "./chunk-LE2EVO57.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";

// src/database/inputTypeSchemas/KanBanListUpdateWithoutCardsInputSchema.ts
import { z } from "zod";
var KanBanListUpdateWithoutCardsInputSchema = z.object({
  indexWithinBoard: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  Kanban: z.lazy(() => KanbanUpdateOneWithoutListsNestedInputSchema).optional()
}).strict();
var KanBanListUpdateWithoutCardsInputSchema_default = KanBanListUpdateWithoutCardsInputSchema;

export {
  KanBanListUpdateWithoutCardsInputSchema,
  KanBanListUpdateWithoutCardsInputSchema_default
};
//# sourceMappingURL=chunk-NRFGJW76.js.map