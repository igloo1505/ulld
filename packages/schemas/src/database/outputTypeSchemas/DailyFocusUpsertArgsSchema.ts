import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { DailyFocusWhereUniqueInputSchema } from '../inputTypeSchemas/DailyFocusWhereUniqueInputSchema'
import { DailyFocusCreateInputSchema } from '../inputTypeSchemas/DailyFocusCreateInputSchema'
import { DailyFocusUncheckedCreateInputSchema } from '../inputTypeSchemas/DailyFocusUncheckedCreateInputSchema'
import { DailyFocusUpdateInputSchema } from '../inputTypeSchemas/DailyFocusUpdateInputSchema'
import { DailyFocusUncheckedUpdateInputSchema } from '../inputTypeSchemas/DailyFocusUncheckedUpdateInputSchema'
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
