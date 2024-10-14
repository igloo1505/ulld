// src/database/inputTypeSchemas/SubjectCreateManyInputSchema.ts
import { z } from "zod";
var SubjectCreateManyInputSchema = z.object({
  value: z.string(),
  kanbanId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();
var SubjectCreateManyInputSchema_default = SubjectCreateManyInputSchema;

export {
  SubjectCreateManyInputSchema,
  SubjectCreateManyInputSchema_default
};
//# sourceMappingURL=chunk-FPHHMBJ6.js.map