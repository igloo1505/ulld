// src/database/inputTypeSchemas/TopicCreateManyKanbanInputSchema.ts
import { z } from "zod";
var TopicCreateManyKanbanInputSchema = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();
var TopicCreateManyKanbanInputSchema_default = TopicCreateManyKanbanInputSchema;

export {
  TopicCreateManyKanbanInputSchema,
  TopicCreateManyKanbanInputSchema_default
};
//# sourceMappingURL=chunk-64BUW7DY.js.map