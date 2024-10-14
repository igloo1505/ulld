import {
  MdxNoteCountOutputTypeSelectSchema
} from "./chunk-KBI4CQE5.js";

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
//# sourceMappingURL=chunk-CG6F6PGF.js.map