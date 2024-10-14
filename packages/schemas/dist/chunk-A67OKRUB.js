import {
  KanBanListUpdateOneWithoutCardsNestedInputSchema
} from "./chunk-HVED4PLW.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";

// src/database/inputTypeSchemas/KanBanCardUpdateInputSchema.ts
import { z } from "zod";
var KanBanCardUpdateInputSchema = z.object({
  indexWithinList: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  details: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  KanBanList: z.lazy(() => KanBanListUpdateOneWithoutCardsNestedInputSchema).optional()
}).strict();
var KanBanCardUpdateInputSchema_default = KanBanCardUpdateInputSchema;

export {
  KanBanCardUpdateInputSchema,
  KanBanCardUpdateInputSchema_default
};
//# sourceMappingURL=chunk-A67OKRUB.js.map