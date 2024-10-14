import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";

// src/database/inputTypeSchemas/KanBanCardUpdateWithoutKanBanListInputSchema.ts
import { z } from "zod";
var KanBanCardUpdateWithoutKanBanListInputSchema = z.object({
  indexWithinList: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  details: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var KanBanCardUpdateWithoutKanBanListInputSchema_default = KanBanCardUpdateWithoutKanBanListInputSchema;

export {
  KanBanCardUpdateWithoutKanBanListInputSchema,
  KanBanCardUpdateWithoutKanBanListInputSchema_default
};
//# sourceMappingURL=chunk-TRDUBIAR.js.map