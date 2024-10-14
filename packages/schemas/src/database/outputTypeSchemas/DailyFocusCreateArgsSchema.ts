import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DailyFocusCreateInputSchema } from '../inputTypeSchemas/DailyFocusCreateInputSchema'
import { DailyFocusUncheckedCreateInputSchema } from '../inputTypeSchemas/DailyFocusUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const DailyFocusSelectSchema: z.ZodType<Prisma.DailyFocusSelect> = z.object({
  value: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export const DailyFocusCreateArgsSchema: z.ZodType<Prisma.DailyFocusCreateArgs> = z.object({
  select: DailyFocusSelectSchema.optional(),
  data: z.union([ DailyFocusCreateInputSchema,DailyFocusUncheckedCreateInputSchema ]),
}).strict() ;

export default DailyFocusCreateArgsSchema;
