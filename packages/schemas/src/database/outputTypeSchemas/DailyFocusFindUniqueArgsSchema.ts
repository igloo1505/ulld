import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DailyFocusWhereUniqueInputSchema } from '../inputTypeSchemas/DailyFocusWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DailyFocusSelectSchema: z.ZodType<Prisma.DailyFocusSelect> = z.object({
  value: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export const DailyFocusFindUniqueArgsSchema: z.ZodType<Prisma.DailyFocusFindUniqueArgs> = z.object({
  select: DailyFocusSelectSchema.optional(),
  where: DailyFocusWhereUniqueInputSchema,
}).strict() ;

export default DailyFocusFindUniqueArgsSchema;
