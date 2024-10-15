import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { TimePeriodUpdateManyMutationInputSchema } from '../inputTypeSchemas/TimePeriodUpdateManyMutationInputSchema.js'
import { TimePeriodUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TimePeriodUncheckedUpdateManyInputSchema.js'
import { TimePeriodWhereInputSchema } from '../inputTypeSchemas/TimePeriodWhereInputSchema.js'
export const TimePeriodUpdateManyArgsSchema: z.ZodType<Prisma.TimePeriodUpdateManyArgs> = z.object({
  data: z.union([ TimePeriodUpdateManyMutationInputSchema,TimePeriodUncheckedUpdateManyInputSchema ]),
  where: TimePeriodWhereInputSchema.optional(),
}).strict() ;
export default TimePeriodUpdateManyArgsSchema;