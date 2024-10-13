// src/database/outputTypeSchemas/TopicCountOutputTypeSelectSchema.ts
import { z } from "zod";
var TopicCountOutputTypeSelectSchema = z.object({
  MdxNotes: z.boolean().optional(),
  ipynbNotes: z.boolean().optional(),
  QAPair: z.boolean().optional(),
  practiceExam: z.boolean().optional(),
  toDo: z.boolean().optional(),
  todoList: z.boolean().optional(),
  bibEntries: z.boolean().optional(),
  equations: z.boolean().optional()
}).strict();
var TopicCountOutputTypeSelectSchema_default = TopicCountOutputTypeSelectSchema;

export {
  TopicCountOutputTypeSelectSchema,
  TopicCountOutputTypeSelectSchema_default
};
//# sourceMappingURL=chunk-CZ2G2Y3F.js.map