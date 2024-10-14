import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/CitationsGroupUncheckedUpdateWithoutEntriesInputSchema.ts
import { z } from "zod";
var CitationsGroupUncheckedUpdateWithoutEntriesInputSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var CitationsGroupUncheckedUpdateWithoutEntriesInputSchema_default = CitationsGroupUncheckedUpdateWithoutEntriesInputSchema;

export {
  CitationsGroupUncheckedUpdateWithoutEntriesInputSchema,
  CitationsGroupUncheckedUpdateWithoutEntriesInputSchema_default
};
//# sourceMappingURL=chunk-MLC7N5YS.js.map