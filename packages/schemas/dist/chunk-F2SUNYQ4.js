import {
  HealthReportOrderByWithAggregationInputSchema
} from "./chunk-AKIKB7WJ.js";
import {
  HealthReportScalarWhereWithAggregatesInputSchema
} from "./chunk-2ZKUKHRE.js";
import {
  HealthReportScalarFieldEnumSchema
} from "./chunk-APXVAXDT.js";
import {
  HealthReportWhereInputSchema
} from "./chunk-MDAJAPVT.js";

// src/database/outputTypeSchemas/HealthReportGroupByArgsSchema.ts
import { z } from "zod";
var HealthReportGroupByArgsSchema = z.object({
  where: HealthReportWhereInputSchema.optional(),
  orderBy: z.union([HealthReportOrderByWithAggregationInputSchema.array(), HealthReportOrderByWithAggregationInputSchema]).optional(),
  by: HealthReportScalarFieldEnumSchema.array(),
  having: HealthReportScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var HealthReportGroupByArgsSchema_default = HealthReportGroupByArgsSchema;

export {
  HealthReportGroupByArgsSchema,
  HealthReportGroupByArgsSchema_default
};
//# sourceMappingURL=chunk-F2SUNYQ4.js.map