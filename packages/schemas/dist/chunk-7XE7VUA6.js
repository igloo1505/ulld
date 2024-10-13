import {
  NoteTypeUpdateManyMutationInputSchema
} from "./chunk-WPS4X335.js";
import {
  NoteTypeUncheckedUpdateManyInputSchema
} from "./chunk-6UTEB72U.js";
import {
  NoteTypeWhereInputSchema
} from "./chunk-BA7HRTM6.js";

// src/database/outputTypeSchemas/NoteTypeUpdateManyArgsSchema.ts
import { z } from "zod";
var NoteTypeUpdateManyArgsSchema = z.object({
  data: z.union([NoteTypeUpdateManyMutationInputSchema, NoteTypeUncheckedUpdateManyInputSchema]),
  where: NoteTypeWhereInputSchema.optional()
}).strict();
var NoteTypeUpdateManyArgsSchema_default = NoteTypeUpdateManyArgsSchema;

export {
  NoteTypeUpdateManyArgsSchema,
  NoteTypeUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-7XE7VUA6.js.map