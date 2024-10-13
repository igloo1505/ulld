import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-W5QDYCGF.js.map