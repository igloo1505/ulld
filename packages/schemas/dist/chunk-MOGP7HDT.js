import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

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
//# sourceMappingURL=chunk-MOGP7HDT.js.map