import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TimePeriodUpdateManyMutationInputSchema } from '../inputTypeSchemas/TimePeriodUpdateManyMutationInputSchema'
import { TimePeriodUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TimePeriodUncheckedUpdateManyInputSchema'
import { TimePeriodWhereInputSchema } from '../inputTypeSchemas/TimePeriodWhereInputSchema'

export const TimePeriodUpdateManyArgsSchema: z.ZodType<Prisma.TimePeriodUpdateManyArgs> = z.object({
  data: z.union([ TimePeriodUpdateManyMutationInputSchema,TimePeriodUncheckedUpdateManyInputSchema ]),
  where: TimePeriodWhereInputSchema.optional(),
}).strict() ;

export default TimePeriodUpdateManyArgsSchema;
