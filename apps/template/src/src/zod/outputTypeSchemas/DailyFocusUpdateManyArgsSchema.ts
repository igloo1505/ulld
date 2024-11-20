import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DailyFocusUpdateManyMutationInputSchema } from '../inputTypeSchemas/DailyFocusUpdateManyMutationInputSchema'
import { DailyFocusUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DailyFocusUncheckedUpdateManyInputSchema'
import { DailyFocusWhereInputSchema } from '../inputTypeSchemas/DailyFocusWhereInputSchema'

export const DailyFocusUpdateManyArgsSchema: z.ZodType<Prisma.DailyFocusUpdateManyArgs> = z.object({
  data: z.union([ DailyFocusUpdateManyMutationInputSchema,DailyFocusUncheckedUpdateManyInputSchema ]),
  where: DailyFocusWhereInputSchema.optional(),
}).strict() ;

export default DailyFocusUpdateManyArgsSchema;
