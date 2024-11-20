import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BibEntryWhereInputSchema } from '../inputTypeSchemas/BibEntryWhereInputSchema'
import { BibEntryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BibEntryOrderByWithAggregationInputSchema'
import { BibEntryScalarFieldEnumSchema } from '../inputTypeSchemas/BibEntryScalarFieldEnumSchema'
import { BibEntryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BibEntryScalarWhereWithAggregatesInputSchema'

export const BibEntryGroupByArgsSchema: z.ZodType<Prisma.BibEntryGroupByArgs> = z.object({
  where: BibEntryWhereInputSchema.optional(),
  orderBy: z.union([ BibEntryOrderByWithAggregationInputSchema.array(),BibEntryOrderByWithAggregationInputSchema ]).optional(),
  by: BibEntryScalarFieldEnumSchema.array(),
  having: BibEntryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BibEntryGroupByArgsSchema;
