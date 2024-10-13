import {
  DefinitionIncludeSchema,
  MdxNoteArgsSchema
} from "./chunk-YNCDDFUC.js";
import {
  DefinitionWhereUniqueInputSchema
} from "./chunk-M33QKPZF.js";

// src/database/outputTypeSchemas/DefinitionFindUniqueArgsSchema.ts
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
var DefinitionFindUniqueArgsSchema = z.object({
  select: DefinitionSelectSchema.optional(),
  include: DefinitionIncludeSchema.optional(),
  where: DefinitionWhereUniqueInputSchema
}).strict();
var DefinitionFindUniqueArgsSchema_default = DefinitionFindUniqueArgsSchema;

export {
  DefinitionSelectSchema,
  DefinitionFindUniqueArgsSchema,
  DefinitionFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-GN5NX24A.js.map