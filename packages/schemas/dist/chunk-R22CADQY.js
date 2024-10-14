import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-TKIJII67.js";

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
//# sourceMappingURL=chunk-R22CADQY.js.map