import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { BibEntryWhereInputSchema } from '../inputTypeSchemas/BibEntryWhereInputSchema.js'
import { BibEntryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BibEntryOrderByWithAggregationInputSchema.js'
import { BibEntryScalarFieldEnumSchema } from '../inputTypeSchemas/BibEntryScalarFieldEnumSchema.js'
import { BibEntryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BibEntryScalarWhereWithAggregatesInputSchema.js'
export const BibEntryGroupByArgsSchema: z.ZodType<Prisma.BibEntryGroupByArgs> = z.object({
  where: BibEntryWhereInputSchema.optional(),
  orderBy: z.union([ BibEntryOrderByWithAggregationInputSchema.array(),BibEntryOrderByWithAggregationInputSchema ]).optional(),
  by: BibEntryScalarFieldEnumSchema.array(),
  having: BibEntryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default BibEntryGroupByArgsSchema;