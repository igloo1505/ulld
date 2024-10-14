import {
  NoteTypeCreateInputSchema
} from "./chunk-NWGUO223.js";
import {
  NoteTypeUncheckedCreateInputSchema
} from "./chunk-DLR5FMAN.js";

// src/database/outputTypeSchemas/NoteTypeCreateArgsSchema.ts
import { z } from "zod";
var NoteTypeSelectSchema = z.object({
  name: z.boolean().optional()
}).strict();
var NoteTypeCreateArgsSchema = z.object({
  select: NoteTypeSelectSchema.optional(),
  data: z.union([NoteTypeCreateInputSchema, NoteTypeUncheckedCreateInputSchema])
}).strict();
var NoteTypeCreateArgsSchema_default = NoteTypeCreateArgsSchema;

export {
  NoteTypeSelectSchema,
  NoteTypeCreateArgsSchema,
  NoteTypeCreateArgsSchema_default
};
//# sourceMappingURL=chunk-IONMXXKK.js.map