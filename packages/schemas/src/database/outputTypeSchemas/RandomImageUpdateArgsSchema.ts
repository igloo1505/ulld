import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RandomImageUpdateInputSchema } from '../inputTypeSchemas/RandomImageUpdateInputSchema'
import { RandomImageUncheckedUpdateInputSchema } from '../inputTypeSchemas/RandomImageUncheckedUpdateInputSchema'
import { RandomImageWhereUniqueInputSchema } from '../inputTypeSchemas/RandomImageWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RandomImageSelectSchema: z.ZodType<Prisma.RandomImageSelect> = z.object({
  path: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export const RandomImageUpdateArgsSchema: z.ZodType<Prisma.RandomImageUpdateArgs> = z.object({
  select: RandomImageSelectSchema.optional(),
  data: z.union([ RandomImageUpdateInputSchema,RandomImageUncheckedUpdateInputSchema ]),
  where: RandomImageWhereUniqueInputSchema,
}).strict() ;

export default RandomImageUpdateArgsSchema;
