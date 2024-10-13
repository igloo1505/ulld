import {
  TaskCategorySchema
} from "./chunk-P4QLHEK4.js";

// src/database/inputTypeSchemas/ToDoCreateManyToDoListInputSchema.ts
import { z } from "zod";
var ToDoCreateManyToDoListInputSchema = z.object({
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
  completedOn: z.coerce.date().optional().nullable()
}).strict();
var ToDoCreateManyToDoListInputSchema_default = ToDoCreateManyToDoListInputSchema;

export {
  ToDoCreateManyToDoListInputSchema,
  ToDoCreateManyToDoListInputSchema_default
};
//# sourceMappingURL=chunk-5WPSISTQ.js.map