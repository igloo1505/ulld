import {
  SubjectCreateNestedManyWithoutTodoListInputSchema,
  TagCreateNestedManyWithoutTodoListInputSchema,
  ToDoCreateNestedManyWithoutToDoListInputSchema,
  TopicCreateNestedManyWithoutTodoListInputSchema
} from "./chunk-5QJWIG3K.js";

// src/database/inputTypeSchemas/ToDoListCreateInputSchema.ts
import { z } from "zod";
var ToDoListCreateInputSchema = z.object({
  label: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  tasks: z.lazy(() => ToDoCreateNestedManyWithoutToDoListInputSchema).optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutTodoListInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutTodoListInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutTodoListInputSchema).optional()
}).strict();
var ToDoListCreateInputSchema_default = ToDoListCreateInputSchema;

export {
  ToDoListCreateInputSchema,
  ToDoListCreateInputSchema_default
};
//# sourceMappingURL=chunk-FAGK3Q3V.js.map