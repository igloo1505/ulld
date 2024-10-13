import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/DailyFocusWhereUniqueInputSchema.js
..//inputTypeSchemas/DailyFocusCreateInputSchema.js
..//inputTypeSchemas/DailyFocusUncheckedCreateInputSchema.js
..//inputTypeSchemas/DailyFocusUpdateInputSchema.js
..//inputTypeSchemas/DailyFocusUncheckedUpdateInputSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DailyFocusSelectSchema: z.ZodType<Prisma.DailyFocusSelect> = z.object({
  value: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()
export const DailyFocusUpsertArgsSchema: z.ZodType<Prisma.DailyFocusUpsertArgs> = z.object({
  select: DailyFocusSelectSchema.optional(),
  where: DailyFocusWhereUniqueInputSchema,
  create: z.union([ DailyFocusCreateInputSchema,DailyFocusUncheckedCreateInputSchema ]),
  update: z.union([ DailyFocusUpdateInputSchema,DailyFocusUncheckedUpdateInputSchema ]),
}).strict() ;
export default DailyFocusUpsertArgsSchema;