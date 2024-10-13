import {
  BibEntryUpdateManyWithoutCitationGroupsNestedInputSchema
} from "./chunk-URHDXKPD.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-LUXHQYGG.js.map