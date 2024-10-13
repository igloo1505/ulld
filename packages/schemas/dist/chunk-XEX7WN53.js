import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";

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
//# sourceMappingURL=chunk-XEX7WN53.js.map