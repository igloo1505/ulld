import {
  KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema
} from "./chunk-ZZUHZSUB.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";

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
//# sourceMappingURL=chunk-YPUL62UN.js.map