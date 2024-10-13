import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";

// src/database/inputTypeSchemas/KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema.ts
import { z } from "zod";
var KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  indexWithinList: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  details: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema_default = KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema;

export {
  KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema,
  KanBanCardUncheckedUpdateManyWithoutKanBanListInputSchema_default
};
//# sourceMappingURL=chunk-EFXHJEQK.js.map