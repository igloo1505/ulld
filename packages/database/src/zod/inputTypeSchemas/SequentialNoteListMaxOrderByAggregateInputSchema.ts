import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SequentialNoteListMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SequentialNoteListMaxOrderByAggregateInput> = z.object({
  sequentialKey: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SequentialNoteListMaxOrderByAggregateInputSchema;
