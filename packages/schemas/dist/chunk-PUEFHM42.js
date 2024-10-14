import {
  BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema
} from "./chunk-2ILO2RZV.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/CitationsGroupUpdateInputSchema.ts
import { z } from "zod";
var CitationsGroupUpdateInputSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  entries: z.lazy(() => BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema).optional()
}).strict();
var CitationsGroupUpdateInputSchema_default = CitationsGroupUpdateInputSchema;

export {
  CitationsGroupUpdateInputSchema,
  CitationsGroupUpdateInputSchema_default
};
//# sourceMappingURL=chunk-PUEFHM42.js.map