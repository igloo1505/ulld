import {
  MdxNoteUncheckedCreateNestedManyWithoutToDoInputSchema,
  SubjectUncheckedCreateNestedManyWithoutToDoInputSchema,
  TagUncheckedCreateNestedManyWithoutToDoInputSchema,
  ToDoUncheckedCreateNestedManyWithoutParentInputSchema,
  TopicUncheckedCreateNestedManyWithoutToDoInputSchema
} from "./chunk-JOZ37TAM.js";
import {
  TaskCategorySchema
} from "./chunk-P4QLHEK4.js";

// src/database/inputTypeSchemas/ToDoUncheckedCreateInputSchema.ts
import { z } from "zod";
var ToDoUncheckedCreateInputSchema = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  task: z.string(),
  dueAt: z.coerce.date().optional().nullable(),
  details: z.string().optional().nullable(),
  parentId: z.number().int().optional().nullable(),
  category: z.lazy(() => TaskCategorySchema).optional().nullable(),
  bookmarked: z.boolean().optional(),
  status: z.string().optional(),
  priority: z.number().int().optional(),
  toDoListId: z.number().int().optional().nullable(),
  completedOn: z.coerce.date().optional().nullable(),
  associatedNotes: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutToDoInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutToDoInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutToDoInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutToDoInputSchema).optional(),
  child: z.lazy(() => ToDoUncheckedCreateNestedManyWithoutParentInputSchema).optional()
}).strict();
var ToDoUncheckedCreateInputSchema_default = ToDoUncheckedCreateInputSchema;

export {
  ToDoUncheckedCreateInputSchema,
  ToDoUncheckedCreateInputSchema_default
};
//# sourceMappingURL=chunk-RTT6PCF3.js.map