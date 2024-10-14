import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DailyFocusCreateManyInputSchema } from '../inputTypeSchemas/DailyFocusCreateManyInputSchema'

export const DailyFocusCreateManyAndReturnArgsSchema: z.ZodType<Prisma.DailyFocusCreateManyAndReturnArgs> = z.object({
  data: z.union([ DailyFocusCreateManyInputSchema,DailyFocusCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default DailyFocusCreateManyAndReturnArgsSchema;
