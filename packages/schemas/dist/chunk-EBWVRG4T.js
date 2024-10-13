import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";

// src/database/inputTypeSchemas/KanBanCardUpdateManyMutationInputSchema.ts
import { z } from "zod";
var KanBanCardUpdateManyMutationInputSchema = z.object({
  indexWithinList: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  details: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var KanBanCardUpdateManyMutationInputSchema_default = KanBanCardUpdateManyMutationInputSchema;

export {
  KanBanCardUpdateManyMutationInputSchema,
  KanBanCardUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-EBWVRG4T.js.map