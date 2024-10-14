import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { HealthReportCreateManyInputSchema } from '../inputTypeSchemas/HealthReportCreateManyInputSchema.js'
export const HealthReportCreateManyArgsSchema: z.ZodType<Prisma.HealthReportCreateManyArgs> = z.object({
  data: z.union([ HealthReportCreateManyInputSchema,HealthReportCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default HealthReportCreateManyArgsSchema;