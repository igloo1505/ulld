import {
  MdxNoteArgsSchema
} from "./chunk-YNCDDFUC.js";

// src/database/inputTypeSchemas/DefinitionSelectSchema.ts
import { z } from "zod";
var DefinitionSelectSchema = z.object({
  id: z.boolean().optional(),
  label: z.boolean().optional(),
  content: z.boolean().optional(),
  alphabeticalLabel: z.boolean().optional(),
  mdxNoteId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  lastAccess: z.boolean().optional(),
  mdxNote: z.union([z.boolean(), z.lazy(() => MdxNoteArgsSchema)]).optional()
}).strict();
var DefinitionSelectSchema_default = DefinitionSelectSchema;

export {
  DefinitionSelectSchema,
  DefinitionSelectSchema_default
};
//# sourceMappingURL=chunk-4CQQW5BL.js.map