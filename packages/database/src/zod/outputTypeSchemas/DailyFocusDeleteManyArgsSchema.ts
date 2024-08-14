import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DailyFocusWhereInputSchema } from '../inputTypeSchemas/DailyFocusWhereInputSchema'

export const DailyFocusDeleteManyArgsSchema: z.ZodType<Prisma.DailyFocusDeleteManyArgs> = z.object({
  where: DailyFocusWhereInputSchema.optional(),
}).strict() ;

export default DailyFocusDeleteManyArgsSchema;
