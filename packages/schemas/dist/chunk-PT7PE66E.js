import {
  MdxNoteCreateNestedOneWithoutDefinitionsInputSchema
} from "./chunk-LBUPN5DJ.js";

// src/database/inputTypeSchemas/DefinitionCreateInputSchema.ts
import { z } from "zod";
var DefinitionCreateInputSchema = z.object({
  id: z.string(),
  label: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  alphabeticalLabel: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  mdxNote: z.lazy(() => MdxNoteCreateNestedOneWithoutDefinitionsInputSchema).optional()
}).strict();
var DefinitionCreateInputSchema_default = DefinitionCreateInputSchema;

export {
  DefinitionCreateInputSchema,
  DefinitionCreateInputSchema_default
};
//# sourceMappingURL=chunk-PT7PE66E.js.map