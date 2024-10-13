import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/DefinitionUncheckedUpdateManyWithoutMdxNoteInputSchema.ts
import { z } from "zod";
var DefinitionUncheckedUpdateManyWithoutMdxNoteInputSchema = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  alphabeticalLabel: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var DefinitionUncheckedUpdateManyWithoutMdxNoteInputSchema_default = DefinitionUncheckedUpdateManyWithoutMdxNoteInputSchema;

export {
  DefinitionUncheckedUpdateManyWithoutMdxNoteInputSchema,
  DefinitionUncheckedUpdateManyWithoutMdxNoteInputSchema_default
};
//# sourceMappingURL=chunk-WYU7ALJH.js.map