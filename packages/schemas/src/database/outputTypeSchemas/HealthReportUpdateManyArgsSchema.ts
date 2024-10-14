import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { HealthReportUpdateManyMutationInputSchema } from '../inputTypeSchemas/HealthReportUpdateManyMutationInputSchema'
import { HealthReportUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/HealthReportUncheckedUpdateManyInputSchema'
import { HealthReportWhereInputSchema } from '../inputTypeSchemas/HealthReportWhereInputSchema'

export const HealthReportUpdateManyArgsSchema: z.ZodType<Prisma.HealthReportUpdateManyArgs> = z.object({
  data: z.union([ HealthReportUpdateManyMutationInputSchema,HealthReportUncheckedUpdateManyInputSchema ]),
  where: HealthReportWhereInputSchema.optional(),
}).strict() ;

export default HealthReportUpdateManyArgsSchema;
