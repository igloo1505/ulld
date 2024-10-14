import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/TopicUncheckedUpdateManyWithoutKanbanInputSchema.ts
import { z } from "zod";
var TopicUncheckedUpdateManyWithoutKanbanInputSchema = z.object({
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var TopicUncheckedUpdateManyWithoutKanbanInputSchema_default = TopicUncheckedUpdateManyWithoutKanbanInputSchema;

export {
  TopicUncheckedUpdateManyWithoutKanbanInputSchema,
  TopicUncheckedUpdateManyWithoutKanbanInputSchema_default
};
//# sourceMappingURL=chunk-O7GQ4JMX.js.map