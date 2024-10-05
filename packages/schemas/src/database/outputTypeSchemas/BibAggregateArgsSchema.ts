import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BibWhereInputSchema } from '../inputTypeSchemas/BibWhereInputSchema'
import { BibOrderByWithRelationInputSchema } from '../inputTypeSchemas/BibOrderByWithRelationInputSchema'
import { BibWhereUniqueInputSchema } from '../inputTypeSchemas/BibWhereUniqueInputSchema'

export const BibAggregateArgsSchema: z.ZodType<Prisma.BibAggregateArgs> = z.object({
  where: BibWhereInputSchema.optional(),
  orderBy: z.union([ BibOrderByWithRelationInputSchema.array(),BibOrderByWithRelationInputSchema ]).optional(),
  cursor: BibWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default BibAggregateArgsSchema;
