import {
  TimePeriodScalarWhereWithAggregatesInputSchema
} from "./chunk-5SKU5WIQ.js";
import {
  TimePeriodOrderByWithAggregationInputSchema
} from "./chunk-ZUNZUDUY.js";
import {
  TimePeriodScalarFieldEnumSchema
} from "./chunk-4V7L2DVJ.js";
import {
  TimePeriodWhereInputSchema
} from "./chunk-MDAJAPVT.js";

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
//# sourceMappingURL=chunk-UOOLB3FC.js.map