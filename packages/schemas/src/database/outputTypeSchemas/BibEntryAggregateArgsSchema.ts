import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { BibEntryWhereInputSchema } from '../inputTypeSchemas/BibEntryWhereInputSchema.js'
import { BibEntryOrderByWithRelationInputSchema } from '../inputTypeSchemas/BibEntryOrderByWithRelationInputSchema.js'
import { BibEntryWhereUniqueInputSchema } from '../inputTypeSchemas/BibEntryWhereUniqueInputSchema.js'
export const BibEntryAggregateArgsSchema: z.ZodType<Prisma.BibEntryAggregateArgs> = z.object({
  where: BibEntryWhereInputSchema.optional(),
  orderBy: z.union([ BibEntryOrderByWithRelationInputSchema.array(),BibEntryOrderByWithRelationInputSchema ]).optional(),
  cursor: BibEntryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default BibEntryAggregateArgsSchema;