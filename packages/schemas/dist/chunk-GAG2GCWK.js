import {
  SnippetCreatekeywordsInputSchema
} from "./chunk-JVQMU3BL.js";

// src/database/inputTypeSchemas/SnippetUncheckedCreateInputSchema.ts
import { z } from "zod";
var SnippetUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  content: z.string(),
  description: z.string(),
  keywords: z.union([z.lazy(() => SnippetCreatekeywordsInputSchema), z.string().array()]).optional(),
  language: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
var SnippetUncheckedCreateInputSchema_default = SnippetUncheckedCreateInputSchema;

export {
  SnippetUncheckedCreateInputSchema,
  SnippetUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-GAG2GCWK.js.map