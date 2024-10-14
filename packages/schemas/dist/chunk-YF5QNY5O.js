// src/database/inputTypeSchemas/DefinitionUncheckedCreateWithoutMdxNoteInputSchema.ts
import { z } from "zod";
var DefinitionUncheckedCreateWithoutMdxNoteInputSchema = z.object({
  id: z.string(),
  label: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  alphabeticalLabel: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();
var DefinitionUncheckedCreateWithoutMdxNoteInputSchema_default = DefinitionUncheckedCreateWithoutMdxNoteInputSchema;

export {
  DefinitionUncheckedCreateWithoutMdxNoteInputSchema,
  DefinitionUncheckedCreateWithoutMdxNoteInputSchema_default
};
//# sourceMappingURL=chunk-YF5QNY5O.js.map