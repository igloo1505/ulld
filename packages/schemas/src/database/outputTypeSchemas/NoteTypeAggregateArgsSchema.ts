import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NoteTypeWhereInputSchema } from '../inputTypeSchemas/NoteTypeWhereInputSchema'
import { NoteTypeOrderByWithRelationInputSchema } from '../inputTypeSchemas/NoteTypeOrderByWithRelationInputSchema'
import { NoteTypeWhereUniqueInputSchema } from '../inputTypeSchemas/NoteTypeWhereUniqueInputSchema'

export const NoteTypeAggregateArgsSchema: z.ZodType<Prisma.NoteTypeAggregateArgs> = z.object({
  where: NoteTypeWhereInputSchema.optional(),
  orderBy: z.union([ NoteTypeOrderByWithRelationInputSchema.array(),NoteTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: NoteTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default NoteTypeAggregateArgsSchema;
