import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";

// src/database/inputTypeSchemas/KanBanCardUncheckedUpdateWithoutKanBanListInputSchema.ts
import { z } from "zod";
var KanBanCardUncheckedUpdateWithoutKanBanListInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  indexWithinList: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  details: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var KanBanCardUncheckedUpdateWithoutKanBanListInputSchema_default = KanBanCardUncheckedUpdateWithoutKanBanListInputSchema;

export {
  KanBanCardUncheckedUpdateWithoutKanBanListInputSchema,
  KanBanCardUncheckedUpdateWithoutKanBanListInputSchema_default
};
//# sourceMappingURL=chunk-KBJH6RAW.js.map