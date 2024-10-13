import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";

// src/database/inputTypeSchemas/KanBanListUncheckedUpdateManyWithoutKanbanInputSchema.ts
import { z } from "zod";
var KanBanListUncheckedUpdateManyWithoutKanbanInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  indexWithinBoard: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var KanBanListUncheckedUpdateManyWithoutKanbanInputSchema_default = KanBanListUncheckedUpdateManyWithoutKanbanInputSchema;

export {
  KanBanListUncheckedUpdateManyWithoutKanbanInputSchema,
  KanBanListUncheckedUpdateManyWithoutKanbanInputSchema_default
};
//# sourceMappingURL=chunk-DJT56GUJ.js.map