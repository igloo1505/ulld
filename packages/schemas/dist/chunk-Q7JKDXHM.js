import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/DefinitionUncheckedUpdateWithoutMdxNoteInputSchema.ts
import { z } from "zod";
var DefinitionUncheckedUpdateWithoutMdxNoteInputSchema = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  alphabeticalLabel: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var DefinitionUncheckedUpdateWithoutMdxNoteInputSchema_default = DefinitionUncheckedUpdateWithoutMdxNoteInputSchema;

export {
  DefinitionUncheckedUpdateWithoutMdxNoteInputSchema,
  DefinitionUncheckedUpdateWithoutMdxNoteInputSchema_default
};
//# sourceMappingURL=chunk-Q7JKDXHM.js.map