import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BibWhereInputSchema } from '../inputTypeSchemas/BibWhereInputSchema'
import { BibOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BibOrderByWithAggregationInputSchema'
import { BibScalarFieldEnumSchema } from '../inputTypeSchemas/BibScalarFieldEnumSchema'
import { BibScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BibScalarWhereWithAggregatesInputSchema'

export const BibGroupByArgsSchema: z.ZodType<Prisma.BibGroupByArgs> = z.object({
  where: BibWhereInputSchema.optional(),
  orderBy: z.union([ BibOrderByWithAggregationInputSchema.array(),BibOrderByWithAggregationInputSchema ]).optional(),
  by: BibScalarFieldEnumSchema.array(),
  having: BibScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BibGroupByArgsSchema;
