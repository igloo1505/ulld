import {
  ServingScalarWhereWithAggregatesInputSchema
} from "./chunk-D6PJVOTP.js";
import {
  ServingOrderByWithAggregationInputSchema
} from "./chunk-VNU44OUE.js";
import {
  ServingScalarFieldEnumSchema
} from "./chunk-RQONZRAX.js";
import {
  ServingWhereInputSchema
} from "./chunk-4FCA5YKO.js";

// src/database/outputTypeSchemas/ServingGroupByArgsSchema.ts
import { z } from "zod";
var ServingGroupByArgsSchema = z.object({
  where: ServingWhereInputSchema.optional(),
  orderBy: z.union([ServingOrderByWithAggregationInputSchema.array(), ServingOrderByWithAggregationInputSchema]).optional(),
  by: ServingScalarFieldEnumSchema.array(),
  having: ServingScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var ServingGroupByArgsSchema_default = ServingGroupByArgsSchema;

export {
  ServingGroupByArgsSchema,
  ServingGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-PV6J3ZHI.js.map