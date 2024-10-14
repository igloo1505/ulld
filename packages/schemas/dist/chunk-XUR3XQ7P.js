// src/database/inputTypeSchemas/SnippetUpdatekeywordsInputSchema.ts
import { z } from "zod";
var SnippetUpdatekeywordsInputSchema = z.object({
  set: z.string().array().optional(),
  push: z.union([z.string(), z.string().array()]).optional()
}).strict();
var SnippetUpdatekeywordsInputSchema_default = SnippetUpdatekeywordsInputSchema;

export {
  SnippetUpdatekeywordsInputSchema,
  SnippetUpdatekeywordsInputSchema_default
};
//# sourceMappingURL=chunk-XUR3XQ7P.js.map