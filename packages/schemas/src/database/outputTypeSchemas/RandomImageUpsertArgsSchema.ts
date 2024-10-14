import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { RandomImageWhereUniqueInputSchema } from '../inputTypeSchemas/RandomImageWhereUniqueInputSchema.js'
import { RandomImageCreateInputSchema } from '../inputTypeSchemas/RandomImageCreateInputSchema.js'
import { RandomImageUncheckedCreateInputSchema } from '../inputTypeSchemas/RandomImageUncheckedCreateInputSchema.js'
import { RandomImageUpdateInputSchema } from '../inputTypeSchemas/RandomImageUpdateInputSchema.js'
import { RandomImageUncheckedUpdateInputSchema } from '../inputTypeSchemas/RandomImageUncheckedUpdateInputSchema.js'
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