// src/database/outputTypeSchemas/PracticeExamCountOutputTypeSelectSchema.ts
import { z } from "zod";
var PracticeExamCountOutputTypeSelectSchema = z.object({
  topics: z.boolean().optional(),
  tags: z.boolean().optional(),
  subjects: z.boolean().optional(),
  questions: z.boolean().optional()
}).strict();
var PracticeExamCountOutputTypeSelectSchema_default = PracticeExamCountOutputTypeSelectSchema;

export {
  PracticeExamCountOutputTypeSelectSchema,
  PracticeExamCountOutputTypeSelectSchema_default
};
//# sourceMappingURL=chunk-FR2KMCZK.js.map