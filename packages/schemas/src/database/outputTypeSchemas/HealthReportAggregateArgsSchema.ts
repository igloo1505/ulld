import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HealthReportWhereInputSchema } from '../inputTypeSchemas/HealthReportWhereInputSchema'
import { HealthReportOrderByWithRelationInputSchema } from '../inputTypeSchemas/HealthReportOrderByWithRelationInputSchema'
import { HealthReportWhereUniqueInputSchema } from '../inputTypeSchemas/HealthReportWhereUniqueInputSchema'

export const HealthReportAggregateArgsSchema: z.ZodType<Prisma.HealthReportAggregateArgs> = z.object({
  where: HealthReportWhereInputSchema.optional(),
  orderBy: z.union([ HealthReportOrderByWithRelationInputSchema.array(),HealthReportOrderByWithRelationInputSchema ]).optional(),
  cursor: HealthReportWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default HealthReportAggregateArgsSchema;
