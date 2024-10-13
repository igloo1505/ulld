import {
  SnippetUpdatekeywordsInputSchema
} from "./chunk-5GUUMNPT.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/SnippetUpdateInputSchema.ts
import { z } from "zod";
var SnippetUpdateInputSchema = z.object({
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  keywords: z.union([z.lazy(() => SnippetUpdatekeywordsInputSchema), z.string().array()]).optional(),
  language: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var SnippetUpdateInputSchema_default = SnippetUpdateInputSchema;

export {
  SnippetUpdateInputSchema,
  SnippetUpdateInputSchema_default
};
//# sourceMappingURL=chunk-LBJQNWK7.js.map