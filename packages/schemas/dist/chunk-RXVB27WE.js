import {
  SnippetWhereUniqueInputSchema
} from "./chunk-R5PTJBPZ.js";

// src/database/outputTypeSchemas/SnippetFindUniqueArgsSchema.ts
import { z } from "zod";
var SnippetSelectSchema = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  description: z.boolean().optional(),
  keywords: z.boolean().optional(),
  language: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var SnippetFindUniqueArgsSchema = z.object({
  select: SnippetSelectSchema.optional(),
  where: SnippetWhereUniqueInputSchema
}).strict();
var SnippetFindUniqueArgsSchema_default = SnippetFindUniqueArgsSchema;

export {
  SnippetSelectSchema,
  SnippetFindUniqueArgsSchema,
  SnippetFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-RXVB27WE.js.map