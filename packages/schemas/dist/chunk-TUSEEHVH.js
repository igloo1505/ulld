import {
  SnippetOrderByWithRelationInputSchema
} from "./chunk-KTLG6RXV.js";
import {
  SnippetScalarFieldEnumSchema
} from "./chunk-YZWJQLOS.js";
import {
  SnippetWhereUniqueInputSchema
} from "./chunk-R5PTJBPZ.js";
import {
  SnippetWhereInputSchema
} from "./chunk-26V4YAOJ.js";

// src/database/outputTypeSchemas/SnippetFindFirstOrThrowArgsSchema.ts
import { z } from "zod";
var SnippetSelectSchema = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  description: z.boolean().optional(),
  keywords: z.boolean().optional(),
  language: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var SnippetFindFirstOrThrowArgsSchema = z.object({
  select: SnippetSelectSchema.optional(),
  where: SnippetWhereInputSchema.optional(),
  orderBy: z.union([SnippetOrderByWithRelationInputSchema.array(), SnippetOrderByWithRelationInputSchema]).optional(),
  cursor: SnippetWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([SnippetScalarFieldEnumSchema, SnippetScalarFieldEnumSchema.array()]).optional()
}).strict();
var SnippetFindFirstOrThrowArgsSchema_default = SnippetFindFirstOrThrowArgsSchema;

export {
  SnippetSelectSchema,
  SnippetFindFirstOrThrowArgsSchema,
  SnippetFindFirstOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-TUSEEHVH.js.map