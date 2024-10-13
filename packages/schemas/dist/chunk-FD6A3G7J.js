import {
  NullableIntFieldUpdateOperationsInputSchema
} from "./chunk-SG2ZRBF2.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/TopicUncheckedUpdateManyWithoutBibEntriesInputSchema.ts
import { z } from "zod";
var TopicUncheckedUpdateManyWithoutBibEntriesInputSchema = z.object({
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  kanbanId: z.union([z.number().int(), z.lazy(() => NullableIntFieldUpdateOperationsInputSchema)]).optional().nullable(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var TopicUncheckedUpdateManyWithoutBibEntriesInputSchema_default = TopicUncheckedUpdateManyWithoutBibEntriesInputSchema;

export {
  TopicUncheckedUpdateManyWithoutBibEntriesInputSchema,
  TopicUncheckedUpdateManyWithoutBibEntriesInputSchema_default
};
//# sourceMappingURL=chunk-FD6A3G7J.js.map