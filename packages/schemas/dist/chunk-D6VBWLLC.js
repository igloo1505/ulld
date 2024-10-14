// src/database/inputTypeSchemas/DefinitionCreateWithoutMdxNoteInputSchema.ts
import { z } from "zod";
var DefinitionCreateWithoutMdxNoteInputSchema = z.object({
  id: z.string(),
  label: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  alphabeticalLabel: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();
var DefinitionCreateWithoutMdxNoteInputSchema_default = DefinitionCreateWithoutMdxNoteInputSchema;

export {
  DefinitionCreateWithoutMdxNoteInputSchema,
  DefinitionCreateWithoutMdxNoteInputSchema_default
};
//# sourceMappingURL=chunk-D6VBWLLC.js.map