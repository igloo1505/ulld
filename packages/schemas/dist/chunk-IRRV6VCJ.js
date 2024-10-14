import {
  NoteTypeCreateInputSchema
} from "./chunk-NWGUO223.js";
import {
  NoteTypeUncheckedCreateInputSchema
} from "./chunk-DLR5FMAN.js";
import {
  NoteTypeUpdateInputSchema
} from "./chunk-PI4FMAGF.js";
import {
  NoteTypeUncheckedUpdateInputSchema
} from "./chunk-LVAWJRYV.js";
import {
  NoteTypeWhereUniqueInputSchema
} from "./chunk-FW7442IX.js";

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
//# sourceMappingURL=chunk-IRRV6VCJ.js.map