import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SequentialNoteListCountOrderByAggregateInputSchema: z.ZodType<Prisma.SequentialNoteListCountOrderByAggregateInput> = z.object({
  sequentialKey: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SequentialNoteListCountOrderByAggregateInputSchema;
