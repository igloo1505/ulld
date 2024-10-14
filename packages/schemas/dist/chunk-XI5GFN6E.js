import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/CitationsGroupUpdateWithoutEntriesInputSchema.ts
import { z } from "zod";
var CitationsGroupUpdateWithoutEntriesInputSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable()
}).strict();
var CitationsGroupUpdateWithoutEntriesInputSchema_default = CitationsGroupUpdateWithoutEntriesInputSchema;

export {
  CitationsGroupUpdateWithoutEntriesInputSchema,
  CitationsGroupUpdateWithoutEntriesInputSchema_default
};
//# sourceMappingURL=chunk-XI5GFN6E.js.map