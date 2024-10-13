import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/TimePeriodCreateManyInputSchema.js
export const TimePeriodCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TimePeriodCreateManyAndReturnArgs> = z.object({
  data: z.union([ TimePeriodCreateManyInputSchema,TimePeriodCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default TimePeriodCreateManyAndReturnArgsSchema;