import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/TimePeriodWhereInputSchema.js
export const TimePeriodDeleteManyArgsSchema: z.ZodType<Prisma.TimePeriodDeleteManyArgs> = z.object({
  where: TimePeriodWhereInputSchema.optional(),
}).strict() ;
export default TimePeriodDeleteManyArgsSchema;