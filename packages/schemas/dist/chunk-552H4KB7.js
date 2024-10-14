import {
  KanBanCardUncheckedUpdateManyWithoutKanBanListNestedInputSchema
} from "./chunk-ZZUHZSUB.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  NullableIntFieldUpdateOperationsInputSchema
} from "./chunk-7KFMTKWN.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";

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
//# sourceMappingURL=chunk-552H4KB7.js.map