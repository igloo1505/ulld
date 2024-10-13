import {
  WaitlistRequestScalarWhereWithAggregatesInputSchema
} from "./chunk-EOMGQLFC.js";
import {
  WaitlistRequestOrderByWithAggregationInputSchema
} from "./chunk-CEV4B2ML.js";
import {
  WaitlistRequestScalarFieldEnumSchema
} from "./chunk-KVSXQT7M.js";
import {
  WaitlistRequestWhereInputSchema
} from "./chunk-KWFDVZ6V.js";

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
//# sourceMappingURL=chunk-DFZPYIVU.js.map