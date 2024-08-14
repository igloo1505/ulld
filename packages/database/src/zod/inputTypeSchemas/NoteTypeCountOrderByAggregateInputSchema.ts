import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const NoteTypeCountOrderByAggregateInputSchema: z.ZodType<Prisma.NoteTypeCountOrderByAggregateInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default NoteTypeCountOrderByAggregateInputSchema;
