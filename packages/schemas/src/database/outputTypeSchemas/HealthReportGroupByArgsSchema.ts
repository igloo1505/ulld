import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HealthReportWhereInputSchema } from '../inputTypeSchemas/HealthReportWhereInputSchema'
import { HealthReportOrderByWithAggregationInputSchema } from '../inputTypeSchemas/HealthReportOrderByWithAggregationInputSchema'
import { HealthReportScalarFieldEnumSchema } from '../inputTypeSchemas/HealthReportScalarFieldEnumSchema'
import { HealthReportScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/HealthReportScalarWhereWithAggregatesInputSchema'

export const HealthReportGroupByArgsSchema: z.ZodType<Prisma.HealthReportGroupByArgs> = z.object({
  where: HealthReportWhereInputSchema.optional(),
  orderBy: z.union([ HealthReportOrderByWithAggregationInputSchema.array(),HealthReportOrderByWithAggregationInputSchema ]).optional(),
  by: HealthReportScalarFieldEnumSchema.array(),
  having: HealthReportScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default HealthReportGroupByArgsSchema;
