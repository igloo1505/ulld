import {
  SnippetWhereUniqueInputSchema
} from "./chunk-R5PTJBPZ.js";

// src/database/outputTypeSchemas/SnippetDeleteArgsSchema.ts
import { z } from "zod";
var SnippetSelectSchema = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  description: z.boolean().optional(),
  keywords: z.boolean().optional(),
  language: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var SnippetDeleteArgsSchema = z.object({
  select: SnippetSelectSchema.optional(),
  where: SnippetWhereUniqueInputSchema
}).strict();
var SnippetDeleteArgsSchema_default = SnippetDeleteArgsSchema;

export {
  SnippetSelectSchema,
  SnippetDeleteArgsSchema,
  SnippetDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-PQGMNAFW.js.map