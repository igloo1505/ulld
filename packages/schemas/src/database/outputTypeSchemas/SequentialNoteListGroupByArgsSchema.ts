import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
import { SequentialNoteListWhereInputSchema } from '../inputTypeSchemas/SequentialNoteListWhereInputSchema.js'
import { SequentialNoteListOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SequentialNoteListOrderByWithAggregationInputSchema.js'
import { SequentialNoteListScalarFieldEnumSchema } from '../inputTypeSchemas/SequentialNoteListScalarFieldEnumSchema.js'
import { SequentialNoteListScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SequentialNoteListScalarWhereWithAggregatesInputSchema.js'
export const SequentialNoteListGroupByArgsSchema: z.ZodType<Prisma.SequentialNoteListGroupByArgs> = z.object({
  where: SequentialNoteListWhereInputSchema.optional(),
  orderBy: z.union([ SequentialNoteListOrderByWithAggregationInputSchema.array(),SequentialNoteListOrderByWithAggregationInputSchema ]).optional(),
  by: SequentialNoteListScalarFieldEnumSchema.array(),
  having: SequentialNoteListScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;
export default SequentialNoteListGroupByArgsSchema;