import {
  DefinitionIncludeSchema,
  MdxNoteArgsSchema
} from "./chunk-YNCDDFUC.js";
import {
  DefinitionWhereUniqueInputSchema
} from "./chunk-M33QKPZF.js";

// src/database/outputTypeSchemas/DefinitionFindUniqueOrThrowArgsSchema.ts
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
var DefinitionFindUniqueOrThrowArgsSchema = z.object({
  select: DefinitionSelectSchema.optional(),
  include: DefinitionIncludeSchema.optional(),
  where: DefinitionWhereUniqueInputSchema
}).strict();
var DefinitionFindUniqueOrThrowArgsSchema_default = DefinitionFindUniqueOrThrowArgsSchema;

export {
  DefinitionSelectSchema,
  DefinitionFindUniqueOrThrowArgsSchema,
  DefinitionFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-BCV2PPWJ.js.map