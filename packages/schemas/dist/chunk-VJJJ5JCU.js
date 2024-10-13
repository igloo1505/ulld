import {
  PracticeExamOrderByWithRelationInputSchema
} from "./chunk-OR45XDUV.js";
import {
  PracticeExamWhereUniqueInputSchema
} from "./chunk-EV6HNKJM.js";
import {
  PracticeExamWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-VJJJ5JCU.js.map