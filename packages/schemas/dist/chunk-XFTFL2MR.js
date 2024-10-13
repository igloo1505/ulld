import {
  NoteTypeUpdateInputSchema
} from "./chunk-7ENCB5QE.js";
import {
  NoteTypeUncheckedUpdateInputSchema
} from "./chunk-DLAASV6O.js";
import {
  NoteTypeWhereUniqueInputSchema
} from "./chunk-TNSB2LM7.js";

// src/database/outputTypeSchemas/NoteTypeUpdateArgsSchema.ts
import { z } from "zod";
var NoteTypeSelectSchema = z.object({
  name: z.boolean().optional()
}).strict();
var NoteTypeUpdateArgsSchema = z.object({
  select: NoteTypeSelectSchema.optional(),
  data: z.union([NoteTypeUpdateInputSchema, NoteTypeUncheckedUpdateInputSchema]),
  where: NoteTypeWhereUniqueInputSchema
}).strict();
var NoteTypeUpdateArgsSchema_default = NoteTypeUpdateArgsSchema;

export {
  NoteTypeSelectSchema,
  NoteTypeUpdateArgsSchema,
  NoteTypeUpdateArgsSchema_default
};
//# sourceMappingURL=chunk-XFTFL2MR.js.map