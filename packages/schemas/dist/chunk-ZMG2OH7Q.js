import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-ZMG2OH7Q.js.map