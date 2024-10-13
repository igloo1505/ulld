import {
  HealthReportOrderByWithAggregationInputSchema
} from "./chunk-FXYZFPCZ.js";
import {
  HealthReportScalarWhereWithAggregatesInputSchema
} from "./chunk-SM5S6W5C.js";
import {
  HealthReportScalarFieldEnumSchema
} from "./chunk-PXXMWZSN.js";
import {
  HealthReportWhereInputSchema
} from "./chunk-4FCA5YKO.js";

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
//# sourceMappingURL=chunk-ZXAB6Z2E.js.map