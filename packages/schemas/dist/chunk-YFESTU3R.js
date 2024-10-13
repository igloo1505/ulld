import {
  SnippetWhereUniqueInputSchema
} from "./chunk-LVMTK4TK.js";

// src/database/outputTypeSchemas/SnippetFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var SnippetSelectSchema = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  description: z.boolean().optional(),
  keywords: z.boolean().optional(),
  language: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var SnippetFindUniqueOrThrowArgsSchema = z.object({
  select: SnippetSelectSchema.optional(),
  where: SnippetWhereUniqueInputSchema
}).strict();
var SnippetFindUniqueOrThrowArgsSchema_default = SnippetFindUniqueOrThrowArgsSchema;

export {
  SnippetSelectSchema,
  SnippetFindUniqueOrThrowArgsSchema,
  SnippetFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-YFESTU3R.js.map