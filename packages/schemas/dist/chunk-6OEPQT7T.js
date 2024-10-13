import {
  NoteTypeWhereUniqueInputSchema
} from "./chunk-TNSB2LM7.js";

// src/database/outputTypeSchemas/NoteTypeFindUniqueArgsSchema.ts
import { z } from "zod";
var NoteTypeSelectSchema = z.object({
  name: z.boolean().optional()
}).strict();
var NoteTypeFindUniqueArgsSchema = z.object({
  select: NoteTypeSelectSchema.optional(),
  where: NoteTypeWhereUniqueInputSchema
}).strict();
var NoteTypeFindUniqueArgsSchema_default = NoteTypeFindUniqueArgsSchema;

export {
  NoteTypeSelectSchema,
  NoteTypeFindUniqueArgsSchema,
  NoteTypeFindUniqueArgsSchema_default
};
//# sourceMappingURL=chunk-6OEPQT7T.js.map