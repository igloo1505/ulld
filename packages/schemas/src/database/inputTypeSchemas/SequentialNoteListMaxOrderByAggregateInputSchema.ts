import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const SequentialNoteListMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SequentialNoteListMaxOrderByAggregateInput> = z.object({
  sequentialKey: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default SequentialNoteListMaxOrderByAggregateInputSchema;