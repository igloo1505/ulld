import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { TimePeriodCreateManyInputSchema } from '../inputTypeSchemas/TimePeriodCreateManyInputSchema.js'
export const TimePeriodCreateManyArgsSchema: z.ZodType<Prisma.TimePeriodCreateManyArgs> = z.object({
  data: z.union([ TimePeriodCreateManyInputSchema,TimePeriodCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default TimePeriodCreateManyArgsSchema;