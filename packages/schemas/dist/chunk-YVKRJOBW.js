import {
  CitationsGroupOrderByWithAggregationInputSchema
} from "./chunk-CU3ZPZXL.js";
import {
  CitationsGroupScalarWhereWithAggregatesInputSchema
} from "./chunk-M7J2M3EO.js";
import {
  CitationsGroupScalarFieldEnumSchema
} from "./chunk-NYWQP4PE.js";
import {
  CitationsGroupWhereInputSchema
} from "./chunk-LSOXTUZL.js";

// src/database/outputTypeSchemas/CitationsGroupGroupByArgsSchema.ts
import { z } from "zod";
var CitationsGroupGroupByArgsSchema = z.object({
  where: CitationsGroupWhereInputSchema.optional(),
  orderBy: z.union([CitationsGroupOrderByWithAggregationInputSchema.array(), CitationsGroupOrderByWithAggregationInputSchema]).optional(),
  by: CitationsGroupScalarFieldEnumSchema.array(),
  having: CitationsGroupScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var CitationsGroupGroupByArgsSchema_default = CitationsGroupGroupByArgsSchema;

export {
  CitationsGroupGroupByArgsSchema,
  CitationsGroupGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-YVKRJOBW.js.map