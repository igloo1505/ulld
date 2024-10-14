// src/database/inputTypeSchemas/TagCreateManyKanbanInputSchema.ts
import { z } from "zod";
var TagCreateManyKanbanInputSchema = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();
var TagCreateManyKanbanInputSchema_default = TagCreateManyKanbanInputSchema;

export {
  TagCreateManyKanbanInputSchema,
  TagCreateManyKanbanInputSchema_default
};
//# sourceMappingURL=chunk-722JK5OC.js.map