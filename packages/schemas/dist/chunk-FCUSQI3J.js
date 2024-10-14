import {
  DefinitionIncludeSchema,
  MdxNoteArgsSchema
} from "./chunk-JV52BDQC.js";
import {
  DefinitionOrderByWithRelationInputSchema
} from "./chunk-H6XJHUHH.js";
import {
  DefinitionWhereUniqueInputSchema
} from "./chunk-6Q2POV45.js";
import {
  DefinitionScalarFieldEnumSchema
} from "./chunk-JNHEMUNF.js";
import {
  DefinitionWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/DefinitionFindFirstOrThrowArgsSchema.ts
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
var DefinitionFindFirstOrThrowArgsSchema = z.object({
  select: DefinitionSelectSchema.optional(),
  include: DefinitionIncludeSchema.optional(),
  where: DefinitionWhereInputSchema.optional(),
  orderBy: z.union([DefinitionOrderByWithRelationInputSchema.array(), DefinitionOrderByWithRelationInputSchema]).optional(),
  cursor: DefinitionWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([DefinitionScalarFieldEnumSchema, DefinitionScalarFieldEnumSchema.array()]).optional()
}).strict();
var DefinitionFindFirstOrThrowArgsSchema_default = DefinitionFindFirstOrThrowArgsSchema;

export {
  DefinitionSelectSchema,
  DefinitionFindFirstOrThrowArgsSchema,
  DefinitionFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-FCUSQI3J.js.map