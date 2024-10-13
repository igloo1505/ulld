import {
  QAPairOrderByWithRelationInputSchema
} from "./chunk-22LE3TNP.js";
import {
  QAPairWhereUniqueInputSchema
} from "./chunk-Q3EJFDQJ.js";
import {
  QAPairWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/QAPairAggregateArgsSchema.ts
import { z } from "zod";
var QAPairAggregateArgsSchema = z.object({
  where: QAPairWhereInputSchema.optional(),
  orderBy: z.union([QAPairOrderByWithRelationInputSchema.array(), QAPairOrderByWithRelationInputSchema]).optional(),
  cursor: QAPairWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var QAPairAggregateArgsSchema_default = QAPairAggregateArgsSchema;

export {
  QAPairAggregateArgsSchema,
  QAPairAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-Q2ZKGRQ6.js.map