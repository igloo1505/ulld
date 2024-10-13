import {
  KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema
} from "./chunk-5G2AO6GC.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  NullableIntFieldUpdateOperationsInputSchema
} from "./chunk-SG2ZRBF2.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";

// src/database/inputTypeSchemas/KanBanListUncheckedUpdateInputSchema.ts
import { z } from "zod";
var KanBanListUncheckedUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  indexWithinBoard: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  boardId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  cards: z.lazy(() => KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema).optional()
}).strict();
var KanBanListUncheckedUpdateInputSchema_default = KanBanListUncheckedUpdateInputSchema;

export {
  KanBanListUncheckedUpdateInputSchema,
  KanBanListUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-AA6B5OAF.js.map