// src/database/inputTypeSchemas/DefinitionCreateManyInputSchema.ts
import { z } from "zod";
var DefinitionCreateManyInputSchema = z.object({
  id: z.string(),
  label: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  alphabeticalLabel: z.string().optional().nullable(),
  mdxNoteId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();
var DefinitionCreateManyInputSchema_default = DefinitionCreateManyInputSchema;

export {
  DefinitionCreateManyInputSchema,
  DefinitionCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-LDVXJURB.js.map