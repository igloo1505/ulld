import {
  NoteTypeWhereUniqueInputSchema
} from "./chunk-TNSB2LM7.js";

// src/database/outputTypeSchemas/NoteTypeFindUniqueOrThrowArgsSchema.ts
import { z } from "zod";
var NoteTypeSelectSchema = z.object({
  name: z.boolean().optional()
}).strict();
var NoteTypeFindUniqueOrThrowArgsSchema = z.object({
  select: NoteTypeSelectSchema.optional(),
  where: NoteTypeWhereUniqueInputSchema
}).strict();
var NoteTypeFindUniqueOrThrowArgsSchema_default = NoteTypeFindUniqueOrThrowArgsSchema;

export {
  NoteTypeSelectSchema,
  NoteTypeFindUniqueOrThrowArgsSchema,
  NoteTypeFindUniqueOrThrowArgsSchema_default
};
//# sourceMappingURL=chunk-7VAYMV4T.js.map