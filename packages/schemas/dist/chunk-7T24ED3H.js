// src/database/inputTypeSchemas/DefinitionUncheckedCreateInputSchema.ts
import { z } from "zod";
var DefinitionUncheckedCreateInputSchema = z.object({
  id: z.string(),
  label: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  alphabeticalLabel: z.string().optional().nullable(),
  mdxNoteId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();
var DefinitionUncheckedCreateInputSchema_default = DefinitionUncheckedCreateInputSchema;

export {
  DefinitionUncheckedCreateInputSchema,
  DefinitionUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-7T24ED3H.js.map