import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { SequentialNoteListCountOrderByAggregateInputSchema } from '../SequentialNoteListCountOrderByAggregateInputSchema.js';
import { SequentialNoteListMaxOrderByAggregateInputSchema } from '../SequentialNoteListMaxOrderByAggregateInputSchema.js';
import { SequentialNoteListMinOrderByAggregateInputSchema } from '../SequentialNoteListMinOrderByAggregateInputSchema.js';
export const SequentialNoteListOrderByWithAggregationInputSchema: z.ZodType<Prisma.SequentialNoteListOrderByWithAggregationInput> = z.object({
  sequentialKey: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SequentialNoteListCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SequentialNoteListMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SequentialNoteListMinOrderByAggregateInputSchema).optional()
}).strict();
export default SequentialNoteListOrderByWithAggregationInputSchema;