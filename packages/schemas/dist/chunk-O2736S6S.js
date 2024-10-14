import {
  DietWhereUniqueInputSchema
} from "./chunk-XSFJADHG.js";
import {
  DietOrderByWithRelationInputSchema
} from "./chunk-4TP62LJL.js";
import {
  DietWhereInputSchema
} from "./chunk-MDAJAPVT.js";

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
//# sourceMappingURL=chunk-O2736S6S.js.map