import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DailyFocusWhereInputSchema } from '../inputTypeSchemas/DailyFocusWhereInputSchema.js'
export const DailyFocusDeleteManyArgsSchema: z.ZodType<Prisma.DailyFocusDeleteManyArgs> = z.object({
  where: DailyFocusWhereInputSchema.optional(),
}).strict() ;
export default DailyFocusDeleteManyArgsSchema;