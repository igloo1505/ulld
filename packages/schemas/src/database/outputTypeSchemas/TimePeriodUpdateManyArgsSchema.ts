import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/TimePeriodUpdateManyMutationInputSchema.js
..//inputTypeSchemas/TimePeriodUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/TimePeriodWhereInputSchema.js
export const TimePeriodUpdateManyArgsSchema: z.ZodType<Prisma.TimePeriodUpdateManyArgs> = z.object({
  data: z.union([ TimePeriodUpdateManyMutationInputSchema,TimePeriodUncheckedUpdateManyInputSchema ]),
  where: TimePeriodWhereInputSchema.optional(),
}).strict() ;
export default TimePeriodUpdateManyArgsSchema;