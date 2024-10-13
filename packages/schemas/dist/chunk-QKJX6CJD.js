import {
  SubjectUncheckedUpdateManyWithoutTodoListNestedInputSchema,
  TagUncheckedUpdateManyWithoutTodoListNestedInputSchema,
  ToDoUncheckedUpdateManyWithoutToDoListNestedInputSchema,
  TopicUncheckedUpdateManyWithoutTodoListNestedInputSchema
} from "./chunk-2SDBTX3Y.js";
import {
  IntFieldUpdateOperationsInputSchema
} from "./chunk-PNLBXL4W.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-EL2ERAXL.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-3GDEEYNJ.js";

// src/database/inputTypeSchemas/ToDoListUncheckedUpdateInputSchema.ts
import { z } from "zod";
var ToDoListUncheckedUpdateInputSchema = z.object({
  id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputSchema)]).optional(),
  label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  tasks: z.lazy(() => ToDoUncheckedUpdateManyWithoutToDoListNestedInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutTodoListNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutTodoListNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutTodoListNestedInputSchema).optional()
}).strict();
var ToDoListUncheckedUpdateInputSchema_default = ToDoListUncheckedUpdateInputSchema;

export {
  ToDoListUncheckedUpdateInputSchema,
  ToDoListUncheckedUpdateInputSchema_default
};
//# sourceMappingURL=chunk-QKJX6CJD.js.map