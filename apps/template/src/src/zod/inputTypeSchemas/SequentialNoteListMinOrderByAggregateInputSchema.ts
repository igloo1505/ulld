import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SequentialNoteListMinOrderByAggregateInputSchema: z.ZodType<Prisma.SequentialNoteListMinOrderByAggregateInput> = z.object({
  sequentialKey: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SequentialNoteListMinOrderByAggregateInputSchema;
