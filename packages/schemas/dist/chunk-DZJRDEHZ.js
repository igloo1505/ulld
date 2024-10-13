import {
  SequentialNoteListCountOutputTypeSelectSchema
} from "./chunk-26R6B4UU.js";

// src/database/outputTypeSchemas/SequentialNoteListCountOutputTypeArgsSchema.ts
import { z } from "zod";
var SequentialNoteListCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => SequentialNoteListCountOutputTypeSelectSchema).nullish()
}).strict();
var SequentialNoteListCountOutputTypeArgsSchema_default = SequentialNoteListCountOutputTypeSelectSchema;

export {
  SequentialNoteListCountOutputTypeArgsSchema,
  SequentialNoteListCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-DZJRDEHZ.js.map