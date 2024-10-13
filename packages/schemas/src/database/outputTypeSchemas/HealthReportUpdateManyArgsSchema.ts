import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/HealthReportUpdateManyMutationInputSchema.js
..//inputTypeSchemas/HealthReportUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/HealthReportWhereInputSchema.js
export const HealthReportUpdateManyArgsSchema: z.ZodType<Prisma.HealthReportUpdateManyArgs> = z.object({
  data: z.union([ HealthReportUpdateManyMutationInputSchema,HealthReportUncheckedUpdateManyInputSchema ]),
  where: HealthReportWhereInputSchema.optional(),
}).strict() ;
export default HealthReportUpdateManyArgsSchema;