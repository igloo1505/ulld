import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  NullableIntFieldUpdateOperationsInputSchema
} from "./chunk-7KFMTKWN.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";

// src/database/inputTypeSchemas/KanBanCardUncheckedUpdateInputSchema.ts
import { z } from "zod";
var KanBanCardUncheckedUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  listId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  indexWithinList: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  details: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var KanBanCardUncheckedUpdateInputSchema_default = KanBanCardUncheckedUpdateInputSchema;

export {
  KanBanCardUncheckedUpdateInputSchema,
  KanBanCardUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-VOEKQHTN.js.map