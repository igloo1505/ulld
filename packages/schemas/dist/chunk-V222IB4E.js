import {
  CitationsGroupOrderByWithRelationInputSchema
} from "./chunk-O6ZQ3TDJ.js";
import {
  CitationsGroupWhereUniqueInputSchema
} from "./chunk-S2NAK5Q6.js";
import {
  CitationsGroupWhereInputSchema
} from "./chunk-XHIJ766H.js";

// src/database/outputTypeSchemas/CitationsGroupAggregateArgsSchema.ts
import { z } from "zod";
var CitationsGroupAggregateArgsSchema = z.object({
  where: CitationsGroupWhereInputSchema.optional(),
  orderBy: z.union([CitationsGroupOrderByWithRelationInputSchema.array(), CitationsGroupOrderByWithRelationInputSchema]).optional(),
  cursor: CitationsGroupWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var CitationsGroupAggregateArgsSchema_default = CitationsGroupAggregateArgsSchema;

export {
  CitationsGroupAggregateArgsSchema,
  CitationsGroupAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-V222IB4E.js.map