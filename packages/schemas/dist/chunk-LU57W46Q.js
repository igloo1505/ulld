import {
  BibEntryUncheckedUpdateManyWithoutCitationGroupsNestedInputSchema
} from "./chunk-JH7L44CO.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-LU57W46Q.js.map