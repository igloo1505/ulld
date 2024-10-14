// src/database/outputTypeSchemas/TagCountOutputTypeSelectSchema.ts
import { z } from "zod";
var TagCountOutputTypeSelectSchema = z.object({
  MdxNotes: z.boolean().optional(),
  bibEntries: z.boolean().optional(),
  ipynbNotes: z.boolean().optional(),
  QAPair: z.boolean().optional(),
  practiceExam: z.boolean().optional(),
  equations: z.boolean().optional(),
  toDo: z.boolean().optional(),
  todoList: z.boolean().optional()
}).strict();
var TagCountOutputTypeSelectSchema_default = TagCountOutputTypeSelectSchema;

export {
  TagCountOutputTypeSelectSchema,
  TagCountOutputTypeSelectSchema_default
};
//# sourceMappingURL=chunk-V6BG62CV.js.map