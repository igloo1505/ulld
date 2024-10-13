import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/BibWhereInputSchema.js
..//inputTypeSchemas/BibOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/BibScalarFieldEnumSchema.js
..//inputTypeSchemas/BibScalarWhereWithAggregatesInputSchema.js
export const BibGroupByArgsSchema: z.ZodType<Prisma.BibGroupByArgs> = z.object({
  where: BibWhereInputSchema.optional(),
  orderBy: z.union([ BibOrderByWithAggregationInputSchema.array(),BibOrderByWithAggregationInputSchema ]).optional(),
  by: BibScalarFieldEnumSchema.array(),
  having: BibScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default BibGroupByArgsSchema;