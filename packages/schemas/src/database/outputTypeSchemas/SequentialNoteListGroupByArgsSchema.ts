import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SequentialNoteListWhereInputSchema } from '../inputTypeSchemas/SequentialNoteListWhereInputSchema'
import { SequentialNoteListOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SequentialNoteListOrderByWithAggregationInputSchema'
import { SequentialNoteListScalarFieldEnumSchema } from '../inputTypeSchemas/SequentialNoteListScalarFieldEnumSchema'
import { SequentialNoteListScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SequentialNoteListScalarWhereWithAggregatesInputSchema'

export const SequentialNoteListGroupByArgsSchema: z.ZodType<Prisma.SequentialNoteListGroupByArgs> = z.object({
  where: SequentialNoteListWhereInputSchema.optional(),
  orderBy: z.union([ SequentialNoteListOrderByWithAggregationInputSchema.array(),SequentialNoteListOrderByWithAggregationInputSchema ]).optional(),
  by: SequentialNoteListScalarFieldEnumSchema.array(),
  having: SequentialNoteListScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SequentialNoteListGroupByArgsSchema;
