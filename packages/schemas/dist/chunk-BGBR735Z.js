import {
  NoteTypeUpdateManyMutationInputSchema
} from "./chunk-3OKPL3V3.js";
import {
  NoteTypeUncheckedUpdateManyInputSchema
} from "./chunk-B5KKAIWF.js";
import {
  NoteTypeWhereInputSchema
} from "./chunk-4ES4YADX.js";

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
//# sourceMappingURL=chunk-BGBR735Z.js.map