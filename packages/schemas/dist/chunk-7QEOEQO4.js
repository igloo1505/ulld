import {
  NullableIntFieldUpdateOperationsInputSchema
} from "./chunk-SG2ZRBF2.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/TopicUncheckedUpdateManyWithoutMdxNotesInputSchema.ts
import { z } from "zod";
var TopicUncheckedUpdateManyWithoutMdxNotesInputSchema = z.object({
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kanbanId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var TopicUncheckedUpdateManyWithoutMdxNotesInputSchema_default = TopicUncheckedUpdateManyWithoutMdxNotesInputSchema;

export {
  TopicUncheckedUpdateManyWithoutMdxNotesInputSchema,
  TopicUncheckedUpdateManyWithoutMdxNotesInputSchema_default
};
//# sourceMappingURL=chunk-7QEOEQO4.js.map