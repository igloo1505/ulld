// src/database/modelSchema/SnippetSchema.ts
import { z } from "zod";
var SnippetSchema = z.object({
  id: z.number().int(),
  content: z.string(),
  description: z.string(),
  keywords: z.string().array(),
  language: z.string(),
  createdAt: z.coerce.date()
});
var SnippetPartialSchema = SnippetSchema.partial();
var SnippetSchema_default = SnippetSchema;

export {
  SnippetSchema,
  SnippetPartialSchema,
  SnippetSchema_default
};
//# sourceMappingURL=chunk-EGPNV6Z6.js.map