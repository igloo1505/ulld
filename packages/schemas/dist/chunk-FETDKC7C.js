// src/database/outputTypeSchemas/MdxNoteCountOutputTypeSelectSchema.ts
import { z } from "zod";
var MdxNoteCountOutputTypeSelectSchema = z.object({
  topics: z.boolean().optional(),
  subjects: z.boolean().optional(),
  tags: z.boolean().optional(),
  citations: z.boolean().optional(),
  ReadingList: z.boolean().optional(),
  equations: z.boolean().optional(),
  definitions: z.boolean().optional(),
  toDo: z.boolean().optional()
}).strict();
var MdxNoteCountOutputTypeSelectSchema_default = MdxNoteCountOutputTypeSelectSchema;

export {
  MdxNoteCountOutputTypeSelectSchema,
  MdxNoteCountOutputTypeSelectSchema_default
};
//# sourceMappingURL=chunk-FETDKC7C.js.map