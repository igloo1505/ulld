import {
  WaitlistRequestScalarWhereWithAggregatesInputSchema
} from "./chunk-PLAARJN3.js";
import {
  WaitlistRequestOrderByWithAggregationInputSchema
} from "./chunk-KFARIGIE.js";
import {
  WaitlistRequestScalarFieldEnumSchema
} from "./chunk-IPGXNP7B.js";
import {
  WaitlistRequestWhereInputSchema
} from "./chunk-7ELNXEAA.js";

// src/database/outputTypeSchemas/WaitlistRequestGroupByArgsSchema.ts
import { z } from "zod";
var WaitlistRequestGroupByArgsSchema = z.object({
  where: WaitlistRequestWhereInputSchema.optional(),
  orderBy: z.union([WaitlistRequestOrderByWithAggregationInputSchema.array(), WaitlistRequestOrderByWithAggregationInputSchema]).optional(),
  by: WaitlistRequestScalarFieldEnumSchema.array(),
  having: WaitlistRequestScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var WaitlistRequestGroupByArgsSchema_default = WaitlistRequestGroupByArgsSchema;

export {
  WaitlistRequestGroupByArgsSchema,
  WaitlistRequestGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-GPJDZHKH.js.map