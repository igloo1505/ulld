import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
..//inputTypeSchemas/SequentialNoteListWhereInputSchema.js
..//inputTypeSchemas/SequentialNoteListOrderByWithAggregationInputSchema.js
..//inputTypeSchemas/SequentialNoteListScalarFieldEnumSchema.js
..//inputTypeSchemas/SequentialNoteListScalarWhereWithAggregatesInputSchema.js
export const SequentialNoteListGroupByArgsSchema: z.ZodType<Prisma.SequentialNoteListGroupByArgs> = z.object({
  where: SequentialNoteListWhereInputSchema.optional(),
  orderBy: z.union([ SequentialNoteListOrderByWithAggregationInputSchema.array(),SequentialNoteListOrderByWithAggregationInputSchema ]).optional(),
  by: SequentialNoteListScalarFieldEnumSchema.array(),
  having: SequentialNoteListScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default SequentialNoteListGroupByArgsSchema;