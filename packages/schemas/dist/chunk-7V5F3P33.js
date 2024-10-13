import {
  RandomImageOrderByWithRelationInputSchema
} from "./chunk-W4VTW4KM.js";
import {
  RandomImageWhereUniqueInputSchema
} from "./chunk-ZEPTB4HC.js";
import {
  RandomImageWhereInputSchema
} from "./chunk-U7V5V5ZX.js";

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
//# sourceMappingURL=chunk-7V5F3P33.js.map