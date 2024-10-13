// src/database/inputTypeSchemas/KanbanCreateManyInputSchema.ts
import { z } from "zod";
var KanbanCreateManyInputSchema = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional()
}).strict();
var KanbanCreateManyInputSchema_default = KanbanCreateManyInputSchema;

export {
  KanbanCreateManyInputSchema,
  KanbanCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-Y24TU4NS.js.map