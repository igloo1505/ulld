import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const SequentialNoteListCountOrderByAggregateInputSchema: z.ZodType<Prisma.SequentialNoteListCountOrderByAggregateInput> = z.object({
  sequentialKey: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default SequentialNoteListCountOrderByAggregateInputSchema;