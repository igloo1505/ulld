import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RandomImageWhereInputSchema } from '../inputTypeSchemas/RandomImageWhereInputSchema'
import { RandomImageOrderByWithRelationInputSchema } from '../inputTypeSchemas/RandomImageOrderByWithRelationInputSchema'
import { RandomImageWhereUniqueInputSchema } from '../inputTypeSchemas/RandomImageWhereUniqueInputSchema'
import { RandomImageScalarFieldEnumSchema } from '../inputTypeSchemas/RandomImageScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RandomImageSelectSchema: z.ZodType<Prisma.RandomImageSelect> = z.object({
  path: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()

export const RandomImageFindFirstOrThrowArgsSchema: z.ZodType<Prisma.RandomImageFindFirstOrThrowArgs> = z.object({
  select: RandomImageSelectSchema.optional(),
  where: RandomImageWhereInputSchema.optional(),
  orderBy: z.union([ RandomImageOrderByWithRelationInputSchema.array(),RandomImageOrderByWithRelationInputSchema ]).optional(),
  cursor: RandomImageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RandomImageScalarFieldEnumSchema,RandomImageScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default RandomImageFindFirstOrThrowArgsSchema;
