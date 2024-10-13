import {
  RandomImageScalarWhereWithAggregatesInputSchema
} from "./chunk-BVW7ARNW.js";
import {
  RandomImageOrderByWithAggregationInputSchema
} from "./chunk-VBWPTM6H.js";
import {
  RandomImageScalarFieldEnumSchema
} from "./chunk-ITW743ZM.js";
import {
  RandomImageWhereInputSchema
} from "./chunk-U7V5V5ZX.js";

// src/database/outputTypeSchemas/RandomImageGroupByArgsSchema.ts
import { z } from "zod";
var RandomImageGroupByArgsSchema = z.object({
  where: RandomImageWhereInputSchema.optional(),
  orderBy: z.union([RandomImageOrderByWithAggregationInputSchema.array(), RandomImageOrderByWithAggregationInputSchema]).optional(),
  by: RandomImageScalarFieldEnumSchema.array(),
  having: RandomImageScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var RandomImageGroupByArgsSchema_default = RandomImageGroupByArgsSchema;

export {
  RandomImageGroupByArgsSchema,
  RandomImageGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-VGXNOOL5.js.map