import {
  SequentialNoteListScalarWhereWithAggregatesInputSchema
} from "./chunk-G6W3QNQS.js";
import {
  SequentialNoteListOrderByWithAggregationInputSchema
} from "./chunk-CV424RGC.js";
import {
  SequentialNoteListScalarFieldEnumSchema
} from "./chunk-KWXMTVR4.js";
import {
  SequentialNoteListWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/SequentialNoteListGroupByArgsSchema.ts
import { z } from "zod";
var SequentialNoteListGroupByArgsSchema = z.object({
  where: SequentialNoteListWhereInputSchema.optional(),
  orderBy: z.union([SequentialNoteListOrderByWithAggregationInputSchema.array(), SequentialNoteListOrderByWithAggregationInputSchema]).optional(),
  by: SequentialNoteListScalarFieldEnumSchema.array(),
  having: SequentialNoteListScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var SequentialNoteListGroupByArgsSchema_default = SequentialNoteListGroupByArgsSchema;

export {
  SequentialNoteListGroupByArgsSchema,
  SequentialNoteListGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-PU7N44N3.js.map