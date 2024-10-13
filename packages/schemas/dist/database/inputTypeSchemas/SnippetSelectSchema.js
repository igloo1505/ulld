// src/database/inputTypeSchemas/SnippetSelectSchema.ts
import { z } from "zod";
var SnippetSelectSchema = z.object({
  id: z.boolean().optional(),
  content: z.boolean().optional(),
  description: z.boolean().optional(),
  keywords: z.boolean().optional(),
  language: z.boolean().optional(),
  createdAt: z.boolean().optional()
}).strict();
var SnippetSelectSchema_default = SnippetSelectSchema;
export {
  SnippetSelectSchema,
  SnippetSelectSchema_default as default
};
//# sourceMappingURL=SnippetSelectSchema.js.map