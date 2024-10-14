import {
  NoteTypeWhereUniqueInputSchema
} from "./chunk-FW7442IX.js";

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
//# sourceMappingURL=chunk-HA5TIV3K.js.map