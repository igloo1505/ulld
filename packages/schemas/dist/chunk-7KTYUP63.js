import {
  DefinitionCreateInputSchema
} from "./chunk-PT7PE66E.js";
import {
  DefinitionUncheckedCreateInputSchema
} from "./chunk-KRW3GLBP.js";
import {
  DefinitionIncludeSchema,
  MdxNoteArgsSchema
} from "./chunk-YNCDDFUC.js";

// src/database/outputTypeSchemas/DefinitionCreateArgsSchema.ts
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
var DefinitionCreateArgsSchema = z.object({
  select: DefinitionSelectSchema.optional(),
  include: DefinitionIncludeSchema.optional(),
  data: z.union([DefinitionCreateInputSchema, DefinitionUncheckedCreateInputSchema])
}).strict();
var DefinitionCreateArgsSchema_default = DefinitionCreateArgsSchema;

export {
  DefinitionSelectSchema,
  DefinitionCreateArgsSchema,
  DefinitionCreateArgsSchema_default
};
//# sourceMappingURL=chunk-7KTYUP63.js.map