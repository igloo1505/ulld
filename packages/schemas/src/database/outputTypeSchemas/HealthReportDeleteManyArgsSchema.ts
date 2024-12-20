import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { HealthReportWhereInputSchema } from '../inputTypeSchemas/HealthReportWhereInputSchema.js'
export const HealthReportDeleteManyArgsSchema: z.ZodType<Prisma.HealthReportDeleteManyArgs> = z.object({
  where: HealthReportWhereInputSchema.optional(),
}).strict() ;
export default HealthReportDeleteManyArgsSchema;