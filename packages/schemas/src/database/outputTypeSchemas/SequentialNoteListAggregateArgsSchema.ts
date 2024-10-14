import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SequentialNoteListWhereInputSchema } from '../inputTypeSchemas/SequentialNoteListWhereInputSchema'
import { SequentialNoteListOrderByWithRelationInputSchema } from '../inputTypeSchemas/SequentialNoteListOrderByWithRelationInputSchema'
import { SequentialNoteListWhereUniqueInputSchema } from '../inputTypeSchemas/SequentialNoteListWhereUniqueInputSchema'

export const SequentialNoteListAggregateArgsSchema: z.ZodType<Prisma.SequentialNoteListAggregateArgs> = z.object({
  where: SequentialNoteListWhereInputSchema.optional(),
  orderBy: z.union([ SequentialNoteListOrderByWithRelationInputSchema.array(),SequentialNoteListOrderByWithRelationInputSchema ]).optional(),
  cursor: SequentialNoteListWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SequentialNoteListAggregateArgsSchema;
