import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DailyFocusCreateManyInputSchema.js
export const DailyFocusCreateManyArgsSchema: z.ZodType<Prisma.DailyFocusCreateManyArgs> = z.object({
  data: z.union([ DailyFocusCreateManyInputSchema,DailyFocusCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;
export default DailyFocusCreateManyArgsSchema;