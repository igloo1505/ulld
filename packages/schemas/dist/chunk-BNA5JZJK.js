import {
  NoteTypeWhereUniqueInputSchema
} from "./chunk-TNSB2LM7.js";

// src/database/outputTypeSchemas/NoteTypeDeleteArgsSchema.ts
import { z } from "zod";
var NoteTypeSelectSchema = z.object({
  name: z.boolean().optional()
}).strict();
var NoteTypeDeleteArgsSchema = z.object({
  select: NoteTypeSelectSchema.optional(),
  where: NoteTypeWhereUniqueInputSchema
}).strict();
var NoteTypeDeleteArgsSchema_default = NoteTypeDeleteArgsSchema;

export {
  NoteTypeSelectSchema,
  NoteTypeDeleteArgsSchema,
  NoteTypeDeleteArgsSchema_default
};
//# sourceMappingURL=chunk-BNA5JZJK.js.map