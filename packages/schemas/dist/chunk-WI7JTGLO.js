// src/database/inputTypeSchemas/ToDoListCreateManyInputSchema.ts
import { z } from "zod";
var ToDoListCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  label: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();
var ToDoListCreateManyInputSchema_default = ToDoListCreateManyInputSchema;

export {
  ToDoListCreateManyInputSchema,
  ToDoListCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-WI7JTGLO.js.map