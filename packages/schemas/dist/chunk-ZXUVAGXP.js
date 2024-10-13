// src/database/inputTypeSchemas/DefinitionCreateManyMdxNoteInputSchema.ts
import { z } from "zod";
var DefinitionCreateManyMdxNoteInputSchema = z.object({
  id: z.string(),
  label: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  alphabeticalLabel: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();
var DefinitionCreateManyMdxNoteInputSchema_default = DefinitionCreateManyMdxNoteInputSchema;

export {
  DefinitionCreateManyMdxNoteInputSchema,
  DefinitionCreateManyMdxNoteInputSchema_default
};
//# sourceMappingURL=chunk-ZXUVAGXP.js.map