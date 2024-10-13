import {
  SnippetCreateInputSchema
} from "./chunk-LKCYWSV4.js";
import {
  SnippetUncheckedCreateInputSchema
} from "./chunk-ISLAHLWJ.js";

// src/database/outputTypeSchemas/SnippetCreateArgsSchema.ts
import { z } from "zod";
var SnippetSelectSchema = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  description: z.boolean().optional(),
  keywords: z.boolean().optional(),
  language: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var SnippetCreateArgsSchema = z.object({
  select: SnippetSelectSchema.optional(),
  data: z.union([SnippetCreateInputSchema, SnippetUncheckedCreateInputSchema])
}).strict();
var SnippetCreateArgsSchema_default = SnippetCreateArgsSchema;

export {
  SnippetSelectSchema,
  SnippetCreateArgsSchema,
  SnippetCreateArgsSchema_default
};
//# sourceMappingURL=chunk-5CWM4CFE.js.map