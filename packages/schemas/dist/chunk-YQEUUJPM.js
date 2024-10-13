import {
  KanBanCardUpdateManyWithoutKanBanListNestedInputSchema
} from "./chunk-FCWXFJH4.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";

// src/database/inputTypeSchemas/KanBanListUpdateWithoutKanbanInputSchema.ts
import { z } from "zod";
var KanBanListUpdateWithoutKanbanInputSchema = z.object({
  indexWithinBoard: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  cards: z.lazy(() => KanBanCardUpdateManyWithoutKanBanListNestedInputSchema).optional()
}).strict();
var KanBanListUpdateWithoutKanbanInputSchema_default = KanBanListUpdateWithoutKanbanInputSchema;

export {
  KanBanListUpdateWithoutKanbanInputSchema,
  KanBanListUpdateWithoutKanbanInputSchema_default
};
//# sourceMappingURL=chunk-YQEUUJPM.js.map