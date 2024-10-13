import {
  SubjectUncheckedCreateNestedManyWithoutTodoListInputSchema,
  TagUncheckedCreateNestedManyWithoutTodoListInputSchema,
  ToDoUncheckedCreateNestedManyWithoutToDoListInputSchema,
  TopicUncheckedCreateNestedManyWithoutTodoListInputSchema
} from "./chunk-JOZ37TAM.js";

// src/database/inputTypeSchemas/ToDoListUncheckedCreateInputSchema.ts
import { z } from "zod";
var ToDoListUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  tasks: z.lazy(() => ToDoUncheckedCreateNestedManyWithoutToDoListInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutTodoListInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutTodoListInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutTodoListInputSchema).optional()
}).strict();
var ToDoListUncheckedCreateInputSchema_default = ToDoListUncheckedCreateInputSchema;

export {
  ToDoListUncheckedCreateInputSchema,
  ToDoListUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-4M7G42IO.js.map