import {
  SequentialNoteListUpdateManyMutationInputSchema
} from "./chunk-MKCHFW3T.js";
import {
  SequentialNoteListUncheckedUpdateManyInputSchema
} from "./chunk-X5NC6HM6.js";
import {
  SequentialNoteListWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/SequentialNoteListUpdateManyArgsSchema.ts
import { z } from "zod";
var SequentialNoteListUpdateManyArgsSchema = z.object({
  data: z.union([SequentialNoteListUpdateManyMutationInputSchema, SequentialNoteListUncheckedUpdateManyInputSchema]),
  where: SequentialNoteListWhereInputSchema.optional()
}).strict();
var SequentialNoteListUpdateManyArgsSchema_default = SequentialNoteListUpdateManyArgsSchema;

export {
  SequentialNoteListUpdateManyArgsSchema,
  SequentialNoteListUpdateManyArgsSchema_default
};
//# sourceMappingURL=chunk-VXVAKCCK.js.map