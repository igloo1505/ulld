import {
  SequentialNoteListScalarWhereWithAggregatesInputSchema
} from "./chunk-3Z6M46ET.js";
import {
  SequentialNoteListOrderByWithAggregationInputSchema
} from "./chunk-4TUV7AGT.js";
import {
  SequentialNoteListScalarFieldEnumSchema
} from "./chunk-PO4RRM7V.js";
import {
  SequentialNoteListWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-H5JPKGGN.js.map