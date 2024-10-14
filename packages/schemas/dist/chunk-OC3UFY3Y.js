import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema.ts
import { z } from "zod";
var CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema_default = CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema;

export {
  CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema,
  CitationsGroupUncheckedUpdateManyWithoutEntriesInputSchema_default
};
//# sourceMappingURL=chunk-OC3UFY3Y.js.map