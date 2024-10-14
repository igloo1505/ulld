import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const NoteTypeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.NoteTypeMaxOrderByAggregateInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default NoteTypeMaxOrderByAggregateInputSchema;
