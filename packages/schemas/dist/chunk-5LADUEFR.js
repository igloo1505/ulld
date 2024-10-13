import {
  SnippetCreatekeywordsInputSchema
} from "./chunk-BZQES4HP.js";

// src/database/inputTypeSchemas/SnippetCreateManyInputSchema.ts
import { z } from "zod";
var SnippetCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  content: z.string(),
  description: z.string(),
  keywords: z.union([z.lazy(() => SnippetCreatekeywordsInputSchema), z.string().array()]).optional(),
  language: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
var SnippetCreateManyInputSchema_default = SnippetCreateManyInputSchema;

export {
  SnippetCreateManyInputSchema,
  SnippetCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-5LADUEFR.js.map