import {
  BibEntryUncheckedUpdateManyWithoutCitationGroupsNestedInputSchema
} from "./chunk-PJHXNUXE.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-EGW2GABF.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/CitationsGroupUncheckedUpdateInputSchema.ts
import { z } from "zod";
var CitationsGroupUncheckedUpdateInputSchema = z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  entries: z.lazy(() => BibEntryUncheckedUpdateManyWithoutCitationGroupsNestedInputSchema).optional()
}).strict();
var CitationsGroupUncheckedUpdateInputSchema_default = CitationsGroupUncheckedUpdateInputSchema;

export {
  CitationsGroupUncheckedUpdateInputSchema,
  CitationsGroupUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-BUF7MMJI.js.map