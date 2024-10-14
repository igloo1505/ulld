import {
  SequentialNoteListWhereUniqueInputSchema
} from "./chunk-QSW5DW43.js";
import {
  SequentialNoteListOrderByWithRelationInputSchema
} from "./chunk-PMLTVZ4P.js";
import {
  SequentialNoteListWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-QQXHDNHB.js.map