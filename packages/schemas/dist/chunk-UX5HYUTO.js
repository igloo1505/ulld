import {
  TaskCategorySchema
} from "./chunk-P4QLHEK4.js";

// src/database/inputTypeSchemas/ToDoCreateManyInputSchema.ts
import { z } from "zod";
var ToDoCreateManyInputSchema = z.object({
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
  completedOn: z.coerce.date().optional().nullable()
}).strict();
var ToDoCreateManyInputSchema_default = ToDoCreateManyInputSchema;

export {
  ToDoCreateManyInputSchema,
  ToDoCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-UX5HYUTO.js.map