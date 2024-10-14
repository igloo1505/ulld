import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DailyFocusUpdateManyMutationInputSchema } from '../inputTypeSchemas/DailyFocusUpdateManyMutationInputSchema.js'
import { DailyFocusUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/DailyFocusUncheckedUpdateManyInputSchema.js'
import { DailyFocusWhereInputSchema } from '../inputTypeSchemas/DailyFocusWhereInputSchema.js'
export const DailyFocusUpdateManyArgsSchema: z.ZodType<Prisma.DailyFocusUpdateManyArgs> = z.object({
  data: z.union([ DailyFocusUpdateManyMutationInputSchema,DailyFocusUncheckedUpdateManyInputSchema ]),
  where: DailyFocusWhereInputSchema.optional(),
}).strict() ;
export default DailyFocusUpdateManyArgsSchema;