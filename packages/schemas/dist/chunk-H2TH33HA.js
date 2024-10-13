import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  NullableIntFieldUpdateOperationsInputSchema
} from "./chunk-SG2ZRBF2.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";

// src/database/inputTypeSchemas/KanBanListUncheckedUpdateWithoutCardsInputSchema.ts
import { z } from "zod";
var KanBanListUncheckedUpdateWithoutCardsInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  indexWithinBoard: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  boardId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var KanBanListUncheckedUpdateWithoutCardsInputSchema_default = KanBanListUncheckedUpdateWithoutCardsInputSchema;

export {
  KanBanListUncheckedUpdateWithoutCardsInputSchema,
  KanBanListUncheckedUpdateWithoutCardsInputSchema_default
};
//# sourceMappingURL=chunk-H2TH33HA.js.map