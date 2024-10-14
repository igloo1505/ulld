import {
  KanbanUpdateOneWithoutListsNestedInputSchema
} from "./chunk-KODE43QT.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";

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
//# sourceMappingURL=chunk-ERB4MM5B.js.map