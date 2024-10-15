import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { BibWhereInputSchema } from '../inputTypeSchemas/BibWhereInputSchema.js'
import { BibOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BibOrderByWithAggregationInputSchema.js'
import { BibScalarFieldEnumSchema } from '../inputTypeSchemas/BibScalarFieldEnumSchema.js'
import { BibScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BibScalarWhereWithAggregatesInputSchema.js'
export const BibGroupByArgsSchema: z.ZodType<Prisma.BibGroupByArgs> = z.object({
  where: BibWhereInputSchema.optional(),
  orderBy: z.union([ BibOrderByWithAggregationInputSchema.array(),BibOrderByWithAggregationInputSchema ]).optional(),
  by: BibScalarFieldEnumSchema.array(),
  having: BibScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default BibGroupByArgsSchema;