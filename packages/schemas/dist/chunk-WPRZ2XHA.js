import {
  MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema
} from "./chunk-HZ5MBGDL.js";
import {
  NullableStringFieldUpdateOperationsInputSchema
} from "./chunk-SOLYHFAT.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/DefinitionUpdateInputSchema.ts
import { z } from "zod";
var DefinitionUpdateInputSchema = z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  content: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  alphabeticalLabel: z.union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  mdxNote: z.lazy(() => MdxNoteUpdateOneWithoutDefinitionsNestedInputSchema).optional()
}).strict();
var DefinitionUpdateInputSchema_default = DefinitionUpdateInputSchema;

export {
  DefinitionUpdateInputSchema,
  DefinitionUpdateInputSchema_default
};
//# sourceMappingURL=chunk-WPRZ2XHA.js.map