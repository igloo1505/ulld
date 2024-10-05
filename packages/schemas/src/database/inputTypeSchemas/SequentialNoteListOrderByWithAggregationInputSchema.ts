import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SequentialNoteListCountOrderByAggregateInputSchema } from './SequentialNoteListCountOrderByAggregateInputSchema';
import { SequentialNoteListMaxOrderByAggregateInputSchema } from './SequentialNoteListMaxOrderByAggregateInputSchema';
import { SequentialNoteListMinOrderByAggregateInputSchema } from './SequentialNoteListMinOrderByAggregateInputSchema';

export const SequentialNoteListOrderByWithAggregationInputSchema: z.ZodType<Prisma.SequentialNoteListOrderByWithAggregationInput> = z.object({
  sequentialKey: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SequentialNoteListCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SequentialNoteListMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SequentialNoteListMinOrderByAggregateInputSchema).optional()
}).strict();

export default SequentialNoteListOrderByWithAggregationInputSchema;
