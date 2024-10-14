import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NoteTypeWhereInputSchema } from '../inputTypeSchemas/NoteTypeWhereInputSchema'
import { NoteTypeOrderByWithAggregationInputSchema } from '../inputTypeSchemas/NoteTypeOrderByWithAggregationInputSchema'
import { NoteTypeScalarFieldEnumSchema } from '../inputTypeSchemas/NoteTypeScalarFieldEnumSchema'
import { NoteTypeScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/NoteTypeScalarWhereWithAggregatesInputSchema'

export const NoteTypeGroupByArgsSchema: z.ZodType<Prisma.NoteTypeGroupByArgs> = z.object({
  where: NoteTypeWhereInputSchema.optional(),
  orderBy: z.union([ NoteTypeOrderByWithAggregationInputSchema.array(),NoteTypeOrderByWithAggregationInputSchema ]).optional(),
  by: NoteTypeScalarFieldEnumSchema.array(),
  having: NoteTypeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default NoteTypeGroupByArgsSchema;
