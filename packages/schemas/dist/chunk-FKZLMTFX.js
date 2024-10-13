import {
  PracticeExamOrderByWithAggregationInputSchema
} from "./chunk-4CGPZDNK.js";
import {
  PracticeExamScalarWhereWithAggregatesInputSchema
} from "./chunk-AUTNHB54.js";
import {
  PracticeExamScalarFieldEnumSchema
} from "./chunk-CZF7TPIB.js";
import {
  PracticeExamWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-FKZLMTFX.js.map