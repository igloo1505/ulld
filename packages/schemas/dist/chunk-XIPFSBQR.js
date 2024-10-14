import {
  KanBanCardUpdateManyWithoutKanBanListNestedInputSchema
} from "./chunk-RE3I7445.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";

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
//# sourceMappingURL=chunk-XIPFSBQR.js.map