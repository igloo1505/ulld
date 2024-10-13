import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/NoteTypeWhereInputSchema.js
..//inputTypeSchemas/NoteTypeOrderByWithRelationInputSchema.js
..//inputTypeSchemas/NoteTypeWhereUniqueInputSchema.js
export const NoteTypeAggregateArgsSchema: z.ZodType<Prisma.NoteTypeAggregateArgs> = z.object({
  where: NoteTypeWhereInputSchema.optional(),
  orderBy: z.union([ NoteTypeOrderByWithRelationInputSchema.array(),NoteTypeOrderByWithRelationInputSchema ]).optional(),
  cursor: NoteTypeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default NoteTypeAggregateArgsSchema;