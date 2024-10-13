// src/database/outputTypeSchemas/KanbanCountOutputTypeSelectSchema.ts
import { z } from "zod";
var KanbanCountOutputTypeSelectSchema = z.object({
  lists: z.boolean().optional(),
  tags: z.boolean().optional(),
  subjects: z.boolean().optional(),
  topics: z.boolean().optional()
}).strict();
var KanbanCountOutputTypeSelectSchema_default = KanbanCountOutputTypeSelectSchema;

export {
  KanbanCountOutputTypeSelectSchema,
  KanbanCountOutputTypeSelectSchema_default
};
//# sourceMappingURL=chunk-DH7NMZLR.js.map