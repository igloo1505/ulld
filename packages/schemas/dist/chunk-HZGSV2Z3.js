import {
  TimePeriodScalarWhereWithAggregatesInputSchema
} from "./chunk-5O2OVCFK.js";
import {
  TimePeriodOrderByWithAggregationInputSchema
} from "./chunk-K7W7IUBM.js";
import {
  TimePeriodScalarFieldEnumSchema
} from "./chunk-SUDI43CV.js";
import {
  TimePeriodWhereInputSchema
} from "./chunk-4FCA5YKO.js";

// src/database/outputTypeSchemas/TimePeriodGroupByArgsSchema.ts
import { z } from "zod";
var TimePeriodGroupByArgsSchema = z.object({
  where: TimePeriodWhereInputSchema.optional(),
  orderBy: z.union([TimePeriodOrderByWithAggregationInputSchema.array(), TimePeriodOrderByWithAggregationInputSchema]).optional(),
  by: TimePeriodScalarFieldEnumSchema.array(),
  having: TimePeriodScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var TimePeriodGroupByArgsSchema_default = TimePeriodGroupByArgsSchema;

export {
  TimePeriodGroupByArgsSchema,
  TimePeriodGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-HZGSV2Z3.js.map