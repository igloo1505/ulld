// src/database/outputTypeSchemas/SubjectCountOutputTypeSelectSchema.ts
import { z } from "zod";
var SubjectCountOutputTypeSelectSchema = z.object({
  MdxNotes: z.boolean().optional(),
  IpynbNotes: z.boolean().optional(),
  QaPair: z.boolean().optional(),
  practiceExam: z.boolean().optional(),
  todoList: z.boolean().optional(),
  toDo: z.boolean().optional(),
  bibEntries: z.boolean().optional(),
  equations: z.boolean().optional()
}).strict();
var SubjectCountOutputTypeSelectSchema_default = SubjectCountOutputTypeSelectSchema;

export {
  SubjectCountOutputTypeSelectSchema,
  SubjectCountOutputTypeSelectSchema_default
};
//# sourceMappingURL=chunk-57N76VWD.js.map