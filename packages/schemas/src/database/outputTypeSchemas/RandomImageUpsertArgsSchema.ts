import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RandomImageWhereUniqueInputSchema } from '../inputTypeSchemas/RandomImageWhereUniqueInputSchema'
import { RandomImageCreateInputSchema } from '../inputTypeSchemas/RandomImageCreateInputSchema'
import { RandomImageUncheckedCreateInputSchema } from '../inputTypeSchemas/RandomImageUncheckedCreateInputSchema'
import { RandomImageUpdateInputSchema } from '../inputTypeSchemas/RandomImageUpdateInputSchema'
import { RandomImageUncheckedUpdateInputSchema } from '../inputTypeSchemas/RandomImageUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RandomImageSelectSchema: z.ZodType<Prisma.RandomImageSelect> = z.object({
  path: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export const RandomImageUpsertArgsSchema: z.ZodType<Prisma.RandomImageUpsertArgs> = z.object({
  select: RandomImageSelectSchema.optional(),
  where: RandomImageWhereUniqueInputSchema,
  create: z.union([ RandomImageCreateInputSchema,RandomImageUncheckedCreateInputSchema ]),
  update: z.union([ RandomImageUpdateInputSchema,RandomImageUncheckedUpdateInputSchema ]),
}).strict() ;

export default RandomImageUpsertArgsSchema;
