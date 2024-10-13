import {
  MdxNoteCreateNestedManyWithoutToDoInputSchema,
  SubjectCreateNestedManyWithoutToDoInputSchema,
  TagCreateNestedManyWithoutToDoInputSchema,
  ToDoCreateNestedManyWithoutParentInputSchema,
  ToDoCreateNestedOneWithoutChildInputSchema,
  ToDoListCreateNestedOneWithoutTasksInputSchema,
  TopicCreateNestedManyWithoutToDoInputSchema
} from "./chunk-JOZ37TAM.js";
import {
  TaskCategorySchema
} from "./chunk-P4QLHEK4.js";

// src/database/inputTypeSchemas/ToDoCreateInputSchema.ts
import { z } from "zod";
var ToDoCreateInputSchema = z.object({
  createdAt: z.coerce.date().optional(),
  task: z.string(),
  dueAt: z.coerce.date().optional().nullable(),
  details: z.string().optional().nullable(),
  category: z.lazy(() => TaskCategorySchema).optional().nullable(),
  bookmarked: z.boolean().optional(),
  status: z.string().optional(),
  priority: z.number().int().optional(),
  completedOn: z.coerce.date().optional().nullable(),
  associatedNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutToDoInputSchema).optional(),
  tags: z.lazy(() => TagCreateNestedManyWithoutToDoInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutToDoInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutToDoInputSchema).optional(),
  parent: z.lazy(() => ToDoCreateNestedOneWithoutChildInputSchema).optional(),
  child: z.lazy(() => ToDoCreateNestedManyWithoutParentInputSchema).optional(),
  ToDoList: z.lazy(() => ToDoListCreateNestedOneWithoutTasksInputSchema).optional()
}).strict();
var ToDoCreateInputSchema_default = ToDoCreateInputSchema;

export {
  ToDoCreateInputSchema,
  ToDoCreateInputSchema_default
};
//# sourceMappingURL=chunk-DCQUDTVS.js.map