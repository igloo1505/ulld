import {
  NoteTypeCreateInputSchema
} from "./chunk-KIES4ILG.js";
import {
  NoteTypeUncheckedCreateInputSchema
} from "./chunk-UWR7GA7O.js";
import {
  NoteTypeUpdateInputSchema
} from "./chunk-7ENCB5QE.js";
import {
  NoteTypeUncheckedUpdateInputSchema
} from "./chunk-DLAASV6O.js";
import {
  NoteTypeWhereUniqueInputSchema
} from "./chunk-TNSB2LM7.js";

// src/database/outputTypeSchemas/NoteTypeUpsertArgsSchema.ts
import { z } from "zod";
var NoteTypeSelectSchema = z.object({
  name: z.boolean().optional()
}).strict();
var NoteTypeUpsertArgsSchema = z.object({
  select: NoteTypeSelectSchema.optional(),
  where: NoteTypeWhereUniqueInputSchema,
  create: z.union([NoteTypeCreateInputSchema, NoteTypeUncheckedCreateInputSchema]),
  update: z.union([NoteTypeUpdateInputSchema, NoteTypeUncheckedUpdateInputSchema])
}).strict();
var NoteTypeUpsertArgsSchema_default = NoteTypeUpsertArgsSchema;

export {
  NoteTypeSelectSchema,
  NoteTypeUpsertArgsSchema,
  NoteTypeUpsertArgsSchema_default
};
//# sourceMappingURL=chunk-RZFP6LFX.js.map