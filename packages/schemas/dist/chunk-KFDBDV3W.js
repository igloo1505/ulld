import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";

// src/database/inputTypeSchemas/KanBanListUpdateManyMutationInputSchema.ts
import { z } from "zod";
var KanBanListUpdateManyMutationInputSchema = z.object({
  indexWithinBoard: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var KanBanListUpdateManyMutationInputSchema_default = KanBanListUpdateManyMutationInputSchema;

export {
  KanBanListUpdateManyMutationInputSchema,
  KanBanListUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-KFDBDV3W.js.map