// src/database/outputTypeSchemas/QAPairCountOutputTypeSelectSchema.ts
import { z } from "zod";
var QAPairCountOutputTypeSelectSchema = z.object({
  tags: z.boolean().optional(),
  topics: z.boolean().optional(),
  subjects: z.boolean().optional(),
  practiceExam: z.boolean().optional()
}).strict();
var QAPairCountOutputTypeSelectSchema_default = QAPairCountOutputTypeSelectSchema;

export {
  QAPairCountOutputTypeSelectSchema,
  QAPairCountOutputTypeSelectSchema_default
};
//# sourceMappingURL=chunk-F6BJQMWD.js.map