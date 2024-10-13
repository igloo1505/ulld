import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-S47EH3VH.js.map