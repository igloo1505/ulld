import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema.js';
export const SequentialNoteListScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SequentialNoteListScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SequentialNoteListScalarWhereWithAggregatesInputSchema),z.lazy(() => SequentialNoteListScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SequentialNoteListScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SequentialNoteListScalarWhereWithAggregatesInputSchema),z.lazy(() => SequentialNoteListScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  sequentialKey: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();
export default SequentialNoteListScalarWhereWithAggregatesInputSchema;