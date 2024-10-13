import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/TagUncheckedUpdateManyWithoutKanbanInputSchema.ts
import { z } from "zod";
var TagUncheckedUpdateManyWithoutKanbanInputSchema = z.object({
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var TagUncheckedUpdateManyWithoutKanbanInputSchema_default = TagUncheckedUpdateManyWithoutKanbanInputSchema;

export {
  TagUncheckedUpdateManyWithoutKanbanInputSchema,
  TagUncheckedUpdateManyWithoutKanbanInputSchema_default
};
//# sourceMappingURL=chunk-M5Y4EUQW.js.map