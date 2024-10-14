import {
  SubjectUncheckedCreateNestedManyWithoutTodoListInputSchema,
  TagUncheckedCreateNestedManyWithoutTodoListInputSchema,
  ToDoUncheckedCreateNestedManyWithoutToDoListInputSchema,
  TopicUncheckedCreateNestedManyWithoutTodoListInputSchema
} from "./chunk-5QJWIG3K.js";

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
//# sourceMappingURL=chunk-MII3GMP5.js.map