import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const NoteTypeMinOrderByAggregateInputSchema: z.ZodType<Prisma.NoteTypeMinOrderByAggregateInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default NoteTypeMinOrderByAggregateInputSchema;
