import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/NoteTypeWhereInputSchema.js
..//inputTypeSchemas/NoteTypeOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/NoteTypeScalarFieldEnumSchema.js
..//inputTypeSchemas/NoteTypeScalarWhereWithAggregatesInputSchema.js
export const NoteTypeGroupByArgsSchema: z.ZodType<Prisma.NoteTypeGroupByArgs> = z.object({
  where: NoteTypeWhereInputSchema.optional(),
  orderBy: z.union([ NoteTypeOrderByWithAggregationInputSchema.array(),NoteTypeOrderByWithAggregationInputSchema ]).optional(),
  by: NoteTypeScalarFieldEnumSchema.array(),
  having: NoteTypeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default NoteTypeGroupByArgsSchema;