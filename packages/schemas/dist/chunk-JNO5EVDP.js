import {
  NoteTypeUpdateInputSchema
} from "./chunk-PI4FMAGF.js";
import {
  NoteTypeUncheckedUpdateInputSchema
} from "./chunk-LVAWJRYV.js";
import {
  NoteTypeWhereUniqueInputSchema
} from "./chunk-FW7442IX.js";

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
//# sourceMappingURL=chunk-JNO5EVDP.js.map