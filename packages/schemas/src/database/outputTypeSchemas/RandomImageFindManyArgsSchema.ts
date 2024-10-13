import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/RandomImageWhereInputSchema.js
..//inputTypeSchemas/RandomImageOrderByWithRelationInputSchema.js
..//inputTypeSchemas/RandomImageWhereUniqueInputSchema.js
..//inputTypeSchemas/RandomImageScalarFieldEnumSchema.js
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------
export const RandomImageSelectSchema: z.ZodType<Prisma.RandomImageSelect> = z.object({
  path: z.boolean().optional(),
  createdAt: z.boolean().optional(),
}).strict()
export const RandomImageFindManyArgsSchema: z.ZodType<Prisma.RandomImageFindManyArgs> = z.object({
  select: RandomImageSelectSchema.optional(),
  where: RandomImageWhereInputSchema.optional(),
  orderBy: z.union([ RandomImageOrderByWithRelationInputSchema.array(),RandomImageOrderByWithRelationInputSchema ]).optional(),
  cursor: RandomImageWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RandomImageScalarFieldEnumSchema,RandomImageScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;
export default RandomImageFindManyArgsSchema;