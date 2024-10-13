import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DailyFocusUpdateInputSchema.js
..//inputTypeSchemas/DailyFocusUncheckedUpdateInputSchema.js
..//inputTypeSchemas/DailyFocusWhereUniqueInputSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DailyFocusSelectSchema: z.ZodType<Prisma.DailyFocusSelect> = z.object({
  value: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()
export const DailyFocusUpdateArgsSchema: z.ZodType<Prisma.DailyFocusUpdateArgs> = z.object({
  select: DailyFocusSelectSchema.optional(),
  data: z.union([ DailyFocusUpdateInputSchema,DailyFocusUncheckedUpdateInputSchema ]),
  where: DailyFocusWhereUniqueInputSchema,
}).strict() ;
export default DailyFocusUpdateArgsSchema;