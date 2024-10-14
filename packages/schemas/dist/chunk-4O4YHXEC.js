import {
  SubjectUpdateManyWithoutTodoListNestedInputSchema,
  TagUpdateManyWithoutTodoListNestedInputSchema,
  ToDoUpdateManyWithoutToDoListNestedInputSchema,
  TopicUpdateManyWithoutTodoListNestedInputSchema
} from "./chunk-5MUGYHMK.js";
import {
  DateTimeFieldUpdateOperationsInputSchema
} from "./chunk-VTROTMKZ.js";
import {
  StringFieldUpdateOperationsInputSchema
} from "./chunk-BQIXGZB5.js";

// src/database/inputTypeSchemas/ToDoListUpdateInputSchema.ts
import { z } from "zod";
var ToDoListUpdateInputSchema = z.object({
  label: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastUpdate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  lastAccess: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputSchema)]).optional(),
  tasks: z.lazy(() => ToDoUpdateManyWithoutToDoListNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutTodoListNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutTodoListNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUpdateManyWithoutTodoListNestedInputSchema).optional()
}).strict();
var ToDoListUpdateInputSchema_default = ToDoListUpdateInputSchema;

export {
  ToDoListUpdateInputSchema,
  ToDoListUpdateInputSchema_default
};
//# sourceMappingURL=chunk-4O4YHXEC.js.map