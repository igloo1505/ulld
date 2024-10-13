import {
  KanBanListUpdateOneWithoutCardsNestedInputSchema
} from "./chunk-D4B765KK.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";

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
//# sourceMappingURL=chunk-TVLCKRC5.js.map