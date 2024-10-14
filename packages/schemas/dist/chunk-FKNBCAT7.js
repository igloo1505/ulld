import {
  ServingOrderByWithRelationInputSchema
} from "./chunk-7YVP76GY.js";
import {
  ServingWhereUniqueInputSchema
} from "./chunk-BRBARM24.js";
import {
  ServingWhereInputSchema
} from "./chunk-MDAJAPVT.js";

// src/database/outputTypeSchemas/ServingAggregateArgsSchema.ts
import { z } from "zod";
var ServingAggregateArgsSchema = z.object({
  where: ServingWhereInputSchema.optional(),
  orderBy: z.union([ServingOrderByWithRelationInputSchema.array(), ServingOrderByWithRelationInputSchema]).optional(),
  cursor: ServingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var ServingAggregateArgsSchema_default = ServingAggregateArgsSchema;

export {
  ServingAggregateArgsSchema,
  ServingAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-FKNBCAT7.js.map