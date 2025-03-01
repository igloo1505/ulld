import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { DailyFocusWhereUniqueInputSchema } from '../inputTypeSchemas/DailyFocusWhereUniqueInputSchema.js'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const DailyFocusSelectSchema: z.ZodType<Prisma.DailyFocusSelect> = z.object({
  value: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()
export const DailyFocusFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.DailyFocusFindUniqueOrThrowArgs> = z.object({
  select: DailyFocusSelectSchema.optional(),
  where: DailyFocusWhereUniqueInputSchema,
}).strict() ;
export default DailyFocusFindUniqueOrThrowArgsSchema;