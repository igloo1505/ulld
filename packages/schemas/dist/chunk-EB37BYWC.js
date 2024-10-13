import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-EB37BYWC.js.map