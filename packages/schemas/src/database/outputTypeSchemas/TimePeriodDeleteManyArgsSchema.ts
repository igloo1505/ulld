import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TimePeriodWhereInputSchema } from '../inputTypeSchemas/TimePeriodWhereInputSchema'

export const TimePeriodDeleteManyArgsSchema: z.ZodType<Prisma.TimePeriodDeleteManyArgs> = z.object({
  where: TimePeriodWhereInputSchema.optional(),
}).strict() ;

export default TimePeriodDeleteManyArgsSchema;
