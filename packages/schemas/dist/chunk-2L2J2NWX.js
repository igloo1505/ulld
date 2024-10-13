import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/CitationsGroupUpdateManyMutationInputSchema.ts
import { z } from "zod";
var CitationsGroupUpdateManyMutationInputSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var CitationsGroupUpdateManyMutationInputSchema_default = CitationsGroupUpdateManyMutationInputSchema;

export {
  CitationsGroupUpdateManyMutationInputSchema,
  CitationsGroupUpdateManyMutationInputSchema_default
};
//# sourceMappingURL=chunk-2L2J2NWX.js.map