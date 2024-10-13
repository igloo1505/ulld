import {
  SequentialNoteListUpdateManyMutationInputSchema
} from "./chunk-2WEDHTP4.js";
import {
  SequentialNoteListUncheckedUpdateManyInputSchema
} from "./chunk-WGEYPCTP.js";
import {
  SequentialNoteListWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-KJZS2YST.js.map