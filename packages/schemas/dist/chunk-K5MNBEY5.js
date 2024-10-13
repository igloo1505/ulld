import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  NullableIntFieldUpdateOperationsInputSchema
} from "./chunk-SG2ZRBF2.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";

// src/database/inputTypeSchemas/KanBanListUncheckedUpdateManyInputSchema.ts
import { z } from "zod";
var KanBanListUncheckedUpdateManyInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  indexWithinBoard: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  boardId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var KanBanListUncheckedUpdateManyInputSchema_default = KanBanListUncheckedUpdateManyInputSchema;

export {
  KanBanListUncheckedUpdateManyInputSchema,
  KanBanListUncheckedUpdateManyInputSchema_default
};
//# sourceMappingURL=chunk-K5MNBEY5.js.map