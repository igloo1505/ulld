import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RandomImageCreateInputSchema } from '../inputTypeSchemas/RandomImageCreateInputSchema'
import { RandomImageUncheckedCreateInputSchema } from '../inputTypeSchemas/RandomImageUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RandomImageSelectSchema: z.ZodType<Prisma.RandomImageSelect> = z.object({
  path: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export const RandomImageCreateArgsSchema: z.ZodType<Prisma.RandomImageCreateArgs> = z.object({
  select: RandomImageSelectSchema.optional(),
  data: z.union([ RandomImageCreateInputSchema,RandomImageUncheckedCreateInputSchema ]),
}).strict() ;

export default RandomImageCreateArgsSchema;
