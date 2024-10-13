import {
  SnippetUpdatekeywordsInputSchema
} from "./chunk-5GUUMNPT.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/SnippetUncheckedUpdateInputSchema.ts
import { z } from "zod";
var SnippetUncheckedUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  content: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  keywords: z.union([z.lazy(() => SnippetUpdatekeywordsInputSchema), z.string().array()]).optional(),
  language: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var SnippetUncheckedUpdateInputSchema_default = SnippetUncheckedUpdateInputSchema;

export {
  SnippetUncheckedUpdateInputSchema,
  SnippetUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-MNDXUUKD.js.map