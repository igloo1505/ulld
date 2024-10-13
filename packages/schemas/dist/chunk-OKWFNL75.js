import {
  MdxNoteCountOutputTypeSelectSchema
} from "./chunk-FETDKC7C.js";

// src/database/outputTypeSchemas/MdxNoteCountOutputTypeArgsSchema.ts
import { z } from "zod";
var MdxNoteCountOutputTypeArgsSchema = z.object({
  select: z.lazy(() => MdxNoteCountOutputTypeSelectSchema).nullish()
}).strict();
var MdxNoteCountOutputTypeArgsSchema_default = MdxNoteCountOutputTypeSelectSchema;

export {
  MdxNoteCountOutputTypeArgsSchema,
  MdxNoteCountOutputTypeArgsSchema_default
};
//# sourceMappingURL=chunk-OKWFNL75.js.map