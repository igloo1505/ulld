// src/database/outputTypeSchemas/SequentialNoteListCountOutputTypeSelectSchema.ts
import { z } from "zod";
var SequentialNoteListCountOutputTypeSelectSchema = z.object({
  MdxNote: z.boolean().optional(),
  Ipynb: z.boolean().optional()
}).strict();
var SequentialNoteListCountOutputTypeSelectSchema_default = SequentialNoteListCountOutputTypeSelectSchema;

export {
  SequentialNoteListCountOutputTypeSelectSchema,
  SequentialNoteListCountOutputTypeSelectSchema_default
};
//# sourceMappingURL=chunk-26R6B4UU.js.map