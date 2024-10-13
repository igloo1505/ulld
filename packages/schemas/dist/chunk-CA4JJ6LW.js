import {
  SequentialNoteListWhereUniqueInputSchema
} from "./chunk-ZZRAIUWH.js";
import {
  SequentialNoteListOrderByWithRelationInputSchema
} from "./chunk-GN7YBMGK.js";
import {
  SequentialNoteListWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/SequentialNoteListAggregateArgsSchema.ts
import { z } from "zod";
var SequentialNoteListAggregateArgsSchema = z.object({
  where: SequentialNoteListWhereInputSchema.optional(),
  orderBy: z.union([SequentialNoteListOrderByWithRelationInputSchema.array(), SequentialNoteListOrderByWithRelationInputSchema]).optional(),
  cursor: SequentialNoteListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var SequentialNoteListAggregateArgsSchema_default = SequentialNoteListAggregateArgsSchema;

export {
  SequentialNoteListAggregateArgsSchema,
  SequentialNoteListAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-CA4JJ6LW.js.map