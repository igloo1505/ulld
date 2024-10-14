import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/SubjectUncheckedUpdateManyWithoutKanbanInputSchema.ts
import { z } from "zod";
var SubjectUncheckedUpdateManyWithoutKanbanInputSchema = z.object({
  value: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional()
}).strict();
var SubjectUncheckedUpdateManyWithoutKanbanInputSchema_default = SubjectUncheckedUpdateManyWithoutKanbanInputSchema;

export {
  SubjectUncheckedUpdateManyWithoutKanbanInputSchema,
  SubjectUncheckedUpdateManyWithoutKanbanInputSchema_default
};
//# sourceMappingURL=chunk-WLC3IEOJ.js.map