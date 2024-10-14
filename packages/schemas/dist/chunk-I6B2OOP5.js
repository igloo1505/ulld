import {
  RandomImageOrderByWithRelationInputSchema
} from "./chunk-5CVYGPNS.js";
import {
  RandomImageWhereUniqueInputSchema
} from "./chunk-7CX6JICO.js";
import {
  RandomImageWhereInputSchema
} from "./chunk-XSVMF53C.js";

// src/database/outputTypeSchemas/RandomImageAggregateArgsSchema.ts
import { z } from "zod";
var RandomImageAggregateArgsSchema = z.object({
  where: RandomImageWhereInputSchema.optional(),
  orderBy: z.union([RandomImageOrderByWithRelationInputSchema.array(), RandomImageOrderByWithRelationInputSchema]).optional(),
  cursor: RandomImageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var RandomImageAggregateArgsSchema_default = RandomImageAggregateArgsSchema;

export {
  RandomImageAggregateArgsSchema,
  RandomImageAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-I6B2OOP5.js.map