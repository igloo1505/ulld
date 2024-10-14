import {
  HealthReportOrderByWithRelationInputSchema
} from "./chunk-H2SQHHJN.js";
import {
  HealthReportWhereUniqueInputSchema
} from "./chunk-LZNACEQH.js";
import {
  HealthReportWhereInputSchema
} from "./chunk-MDAJAPVT.js";

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
//# sourceMappingURL=chunk-DEIEJ2PU.js.map