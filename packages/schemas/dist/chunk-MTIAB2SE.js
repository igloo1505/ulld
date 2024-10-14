import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/CitationsGroupUncheckedUpdateManyInputSchema.ts
import { z } from "zod";
var CitationsGroupUncheckedUpdateManyInputSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var CitationsGroupUncheckedUpdateManyInputSchema_default = CitationsGroupUncheckedUpdateManyInputSchema;

export {
  CitationsGroupUncheckedUpdateManyInputSchema,
  CitationsGroupUncheckedUpdateManyInputSchema_default
};
//# sourceMappingURL=chunk-MTIAB2SE.js.map