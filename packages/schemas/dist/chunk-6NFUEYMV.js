import {
  CitationsGroupOrderByWithAggregationInputSchema
} from "./chunk-YLCTBGWM.js";
import {
  CitationsGroupScalarWhereWithAggregatesInputSchema
} from "./chunk-LKSAXARD.js";
import {
  CitationsGroupScalarFieldEnumSchema
} from "./chunk-GPSZTTIR.js";
import {
  CitationsGroupWhereInputSchema
} from "./chunk-XHIJ766H.js";

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
//# sourceMappingURL=chunk-6NFUEYMV.js.map