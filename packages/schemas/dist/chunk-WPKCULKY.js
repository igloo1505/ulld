import {
  PracticeExamOrderByWithAggregationInputSchema
} from "./chunk-XEB4FDCW.js";
import {
  PracticeExamScalarWhereWithAggregatesInputSchema
} from "./chunk-YXUTXVK4.js";
import {
  PracticeExamScalarFieldEnumSchema
} from "./chunk-NO6FD3MG.js";
import {
  PracticeExamWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/PracticeExamGroupByArgsSchema.ts
import { z } from "zod";
var PracticeExamGroupByArgsSchema = z.object({
  where: PracticeExamWhereInputSchema.optional(),
  orderBy: z.union([PracticeExamOrderByWithAggregationInputSchema.array(), PracticeExamOrderByWithAggregationInputSchema]).optional(),
  by: PracticeExamScalarFieldEnumSchema.array(),
  having: PracticeExamScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var PracticeExamGroupByArgsSchema_default = PracticeExamGroupByArgsSchema;

export {
  PracticeExamGroupByArgsSchema,
  PracticeExamGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-WPKCULKY.js.map