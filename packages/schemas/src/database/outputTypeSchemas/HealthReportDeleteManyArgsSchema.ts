import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HealthReportWhereInputSchema } from '../inputTypeSchemas/HealthReportWhereInputSchema'

export const HealthReportDeleteManyArgsSchema: z.ZodType<Prisma.HealthReportDeleteManyArgs> = z.object({
  where: HealthReportWhereInputSchema.optional(),
}).strict() ;

export default HealthReportDeleteManyArgsSchema;
