import {
  PracticeExamOrderByWithRelationInputSchema
} from "./chunk-LW7N27TI.js";
import {
  PracticeExamWhereUniqueInputSchema
} from "./chunk-FZLXAQ4E.js";
import {
  PracticeExamWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/PracticeExamAggregateArgsSchema.ts
import { z } from "zod";
var PracticeExamAggregateArgsSchema = z.object({
  where: PracticeExamWhereInputSchema.optional(),
  orderBy: z.union([PracticeExamOrderByWithRelationInputSchema.array(), PracticeExamOrderByWithRelationInputSchema]).optional(),
  cursor: PracticeExamWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var PracticeExamAggregateArgsSchema_default = PracticeExamAggregateArgsSchema;

export {
  PracticeExamAggregateArgsSchema,
  PracticeExamAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-YZFSPBPI.js.map