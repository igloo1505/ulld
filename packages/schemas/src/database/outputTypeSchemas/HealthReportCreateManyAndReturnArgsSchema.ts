import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { HealthReportCreateManyInputSchema } from '../inputTypeSchemas/HealthReportCreateManyInputSchema.js'
export const HealthReportCreateManyAndReturnArgsSchema: z.ZodType<Prisma.HealthReportCreateManyAndReturnArgs> = z.object({
  data: z.union([ HealthReportCreateManyInputSchema,HealthReportCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default HealthReportCreateManyAndReturnArgsSchema;