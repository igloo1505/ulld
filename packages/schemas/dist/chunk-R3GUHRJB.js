import {
  DefinitionIncludeSchema,
  MdxNoteArgsSchema
} from "./chunk-YNCDDFUC.js";
import {
  DefinitionOrderByWithRelationInputSchema
} from "./chunk-BOIIGQPH.js";
import {
  DefinitionWhereUniqueInputSchema
} from "./chunk-M33QKPZF.js";
import {
  DefinitionScalarFieldEnumSchema
} from "./chunk-G3MC4RUQ.js";
import {
  DefinitionWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/DefinitionFindFirstArgsSchema.ts
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
var DefinitionFindFirstArgsSchema = z.object({
  select: DefinitionSelectSchema.optional(),
  include: DefinitionIncludeSchema.optional(),
  where: DefinitionWhereInputSchema.optional(),
  orderBy: z.union([DefinitionOrderByWithRelationInputSchema.array(), DefinitionOrderByWithRelationInputSchema]).optional(),
  cursor: DefinitionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([DefinitionScalarFieldEnumSchema, DefinitionScalarFieldEnumSchema.array()]).optional()
}).strict();
var DefinitionFindFirstArgsSchema_default = DefinitionFindFirstArgsSchema;

export {
  DefinitionSelectSchema,
  DefinitionFindFirstArgsSchema,
  DefinitionFindFirstArgsSchema_default
};
//# sourceMappingURL=chunk-R3GUHRJB.js.map