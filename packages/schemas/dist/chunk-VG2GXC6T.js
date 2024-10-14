import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";

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
//# sourceMappingURL=chunk-VG2GXC6T.js.map