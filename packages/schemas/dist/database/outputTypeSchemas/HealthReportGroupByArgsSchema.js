import { z } from 'zod';
import { HealthReportWhereInputSchema } from '../inputTypeSchemas/HealthReportWhereInputSchema.js';
import { HealthReportOrderByWithAggregationInputSchema } from '../inputTypeSchemas/HealthReportOrderByWithAggregationInputSchema.js';
import { HealthReportScalarFieldEnumSchema } from '../inputTypeSchemas/HealthReportScalarFieldEnumSchema.js';
import { HealthReportScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/HealthReportScalarWhereWithAggregatesInputSchema.js';
export const HealthReportGroupByArgsSchema = z.object({
    where: HealthReportWhereInputSchema.optional(),
    orderBy: z.union([HealthReportOrderByWithAggregationInputSchema.array(), HealthReportOrderByWithAggregationInputSchema]).optional(),
    by: HealthReportScalarFieldEnumSchema.array(),
    having: HealthReportScalarWhereWithAggregatesInputSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
}).strict();
export default HealthReportGroupByArgsSchema;
