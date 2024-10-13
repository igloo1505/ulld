import {
  SnippetCreatekeywordsInputSchema
} from "./chunk-BZQES4HP.js";

// src/database/inputTypeSchemas/SnippetCreateInputSchema.ts
import { z } from "zod";
var SnippetCreateInputSchema = z.object({
  content: z.string(),
  description: z.string(),
  keywords: z.union([z.lazy(() => SnippetCreatekeywordsInputSchema), z.string().array()]).optional(),
  language: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
var SnippetCreateInputSchema_default = SnippetCreateInputSchema;

export {
  SnippetCreateInputSchema,
  SnippetCreateInputSchema_default
};
//# sourceMappingURL=chunk-LKCYWSV4.js.map