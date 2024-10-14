// src/database/inputTypeSchemas/SubjectCreateManyKanbanInputSchema.ts
import { z } from "zod";
var SubjectCreateManyKanbanInputSchema = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();
var SubjectCreateManyKanbanInputSchema_default = SubjectCreateManyKanbanInputSchema;

export {
  SubjectCreateManyKanbanInputSchema,
  SubjectCreateManyKanbanInputSchema_default
};
//# sourceMappingURL=chunk-JWBKN6ZD.js.map