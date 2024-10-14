import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BibEntryWhereInputSchema } from '../inputTypeSchemas/BibEntryWhereInputSchema'
import { BibEntryOrderByWithRelationInputSchema } from '../inputTypeSchemas/BibEntryOrderByWithRelationInputSchema'
import { BibEntryWhereUniqueInputSchema } from '../inputTypeSchemas/BibEntryWhereUniqueInputSchema'

export const BibEntryAggregateArgsSchema: z.ZodType<Prisma.BibEntryAggregateArgs> = z.object({
  where: BibEntryWhereInputSchema.optional(),
  orderBy: z.union([ BibEntryOrderByWithRelationInputSchema.array(),BibEntryOrderByWithRelationInputSchema ]).optional(),
  cursor: BibEntryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BibEntryAggregateArgsSchema;
