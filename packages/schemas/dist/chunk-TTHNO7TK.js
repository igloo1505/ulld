import {
  ServingScalarWhereWithAggregatesInputSchema
} from "./chunk-RU3G45MR.js";
import {
  ServingOrderByWithAggregationInputSchema
} from "./chunk-ATZ75PAL.js";
import {
  ServingScalarFieldEnumSchema
} from "./chunk-Q5LINEDD.js";
import {
  ServingWhereInputSchema
} from "./chunk-MDAJAPVT.js";

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
//# sourceMappingURL=chunk-TTHNO7TK.js.map