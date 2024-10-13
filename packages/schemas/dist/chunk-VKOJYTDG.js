import {
  DietWhereUniqueInputSchema
} from "./chunk-CDT5ANSD.js";
import {
  DietOrderByWithRelationInputSchema
} from "./chunk-WI5K43UV.js";
import {
  DietWhereInputSchema
} from "./chunk-4FCA5YKO.js";

// src/database/outputTypeSchemas/DietAggregateArgsSchema.ts
import { z } from "zod";
var DietAggregateArgsSchema = z.object({
  where: DietWhereInputSchema.optional(),
  orderBy: z.union([DietOrderByWithRelationInputSchema.array(), DietOrderByWithRelationInputSchema]).optional(),
  cursor: DietWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var DietAggregateArgsSchema_default = DietAggregateArgsSchema;

export {
  DietAggregateArgsSchema,
  DietAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-VKOJYTDG.js.map