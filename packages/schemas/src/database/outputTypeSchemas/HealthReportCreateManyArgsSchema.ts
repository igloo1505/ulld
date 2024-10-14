import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HealthReportCreateManyInputSchema } from '../inputTypeSchemas/HealthReportCreateManyInputSchema'

export const HealthReportCreateManyArgsSchema: z.ZodType<Prisma.HealthReportCreateManyArgs> = z.object({
  data: z.union([ HealthReportCreateManyInputSchema,HealthReportCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default HealthReportCreateManyArgsSchema;
