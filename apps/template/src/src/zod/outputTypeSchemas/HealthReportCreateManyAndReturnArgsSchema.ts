import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HealthReportCreateManyInputSchema } from '../inputTypeSchemas/HealthReportCreateManyInputSchema'

export const HealthReportCreateManyAndReturnArgsSchema: z.ZodType<Prisma.HealthReportCreateManyAndReturnArgs> = z.object({
  data: z.union([ HealthReportCreateManyInputSchema,HealthReportCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default HealthReportCreateManyAndReturnArgsSchema;
