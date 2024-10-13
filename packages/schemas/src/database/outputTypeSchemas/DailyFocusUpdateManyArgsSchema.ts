import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DailyFocusUpdateManyMutationInputSchema.js
..//inputTypeSchemas/DailyFocusUncheckedUpdateManyInputSchema.js
..//inputTypeSchemas/DailyFocusWhereInputSchema.js
export const DailyFocusUpdateManyArgsSchema: z.ZodType<Prisma.DailyFocusUpdateManyArgs> = z.object({
  data: z.union([ DailyFocusUpdateManyMutationInputSchema,DailyFocusUncheckedUpdateManyInputSchema ]),
  where: DailyFocusWhereInputSchema.optional(),
}).strict() ;
export default DailyFocusUpdateManyArgsSchema;