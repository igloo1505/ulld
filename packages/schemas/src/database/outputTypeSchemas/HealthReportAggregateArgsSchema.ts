import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { HealthReportWhereInputSchema } from '../inputTypeSchemas/HealthReportWhereInputSchema.js'
import { HealthReportOrderByWithRelationInputSchema } from '../inputTypeSchemas/HealthReportOrderByWithRelationInputSchema.js'
import { HealthReportWhereUniqueInputSchema } from '../inputTypeSchemas/HealthReportWhereUniqueInputSchema.js'
export const HealthReportAggregateArgsSchema: z.ZodType<Prisma.HealthReportAggregateArgs> = z.object({
  where: HealthReportWhereInputSchema.optional(),
  orderBy: z.union([ HealthReportOrderByWithRelationInputSchema.array(),HealthReportOrderByWithRelationInputSchema ]).optional(),
  cursor: HealthReportWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default HealthReportAggregateArgsSchema;