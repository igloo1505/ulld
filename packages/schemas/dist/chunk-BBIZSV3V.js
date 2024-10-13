import {
  HealthReportOrderByWithRelationInputSchema
} from "./chunk-A3VY7CY6.js";
import {
  HealthReportWhereUniqueInputSchema
} from "./chunk-S23BCLNO.js";
import {
  HealthReportWhereInputSchema
} from "./chunk-4FCA5YKO.js";

// src/database/outputTypeSchemas/HealthReportAggregateArgsSchema.ts
import { z } from "zod";
var HealthReportAggregateArgsSchema = z.object({
  where: HealthReportWhereInputSchema.optional(),
  orderBy: z.union([HealthReportOrderByWithRelationInputSchema.array(), HealthReportOrderByWithRelationInputSchema]).optional(),
  cursor: HealthReportWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional()
}).strict();
var HealthReportAggregateArgsSchema_default = HealthReportAggregateArgsSchema;

export {
  HealthReportAggregateArgsSchema,
  HealthReportAggregateArgsSchema_default
};
//# sourceMappingURL=chunk-BBIZSV3V.js.map