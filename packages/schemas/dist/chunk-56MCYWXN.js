import {
  CitationsGroupOrderByWithRelationInputSchema
} from "./chunk-BGPJ5GX2.js";
import {
  CitationsGroupWhereUniqueInputSchema
} from "./chunk-GY5DALUC.js";
import {
  CitationsGroupWhereInputSchema
} from "./chunk-LSOXTUZL.js";

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
//# sourceMappingURL=chunk-56MCYWXN.js.map