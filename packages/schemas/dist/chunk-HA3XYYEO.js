import {
  TaskCategorySchema
} from "./chunk-T4CHWTHS.js";

// src/database/inputTypeSchemas/ToDoCreateManyParentInputSchema.ts
import { z } from "zod";
var ToDoCreateManyParentInputSchema = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  task: z.string(),
  dueAt: z.coerce.date().optional().nullable(),
  details: z.string().optional().nullable(),
  category: z.lazy(() => TaskCategorySchema).optional().nullable(),
  bookmarked: z.boolean().optional(),
  status: z.string().optional(),
  priority: z.number().int().optional(),
  toDoListId: z.number().int().optional().nullable(),
  completedOn: z.coerce.date().optional().nullable()
}).strict();
var ToDoCreateManyParentInputSchema_default = ToDoCreateManyParentInputSchema;

export {
  ToDoCreateManyParentInputSchema,
  ToDoCreateManyParentInputSchema_default
};
//# sourceMappingURL=chunk-HA3XYYEO.js.map