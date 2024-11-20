import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TimePeriodCreateManyInputSchema } from '../inputTypeSchemas/TimePeriodCreateManyInputSchema'

export const TimePeriodCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TimePeriodCreateManyAndReturnArgs> = z.object({
  data: z.union([ TimePeriodCreateManyInputSchema,TimePeriodCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default TimePeriodCreateManyAndReturnArgsSchema;
