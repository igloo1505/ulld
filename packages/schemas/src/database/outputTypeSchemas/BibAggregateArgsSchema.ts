import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/BibWhereInputSchema.js
..//inputTypeSchemas/BibOrderByWithRelationInputSchema.js
..//inputTypeSchemas/BibWhereUniqueInputSchema.js
export const BibAggregateArgsSchema: z.ZodType<Prisma.BibAggregateArgs> = z.object({
  where: BibWhereInputSchema.optional(),
  orderBy: z.union([ BibOrderByWithRelationInputSchema.array(),BibOrderByWithRelationInputSchema ]).optional(),
  cursor: BibWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default BibAggregateArgsSchema;