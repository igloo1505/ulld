import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { NoteTypeCountOrderByAggregateInputSchema } from './NoteTypeCountOrderByAggregateInputSchema';
import { NoteTypeMaxOrderByAggregateInputSchema } from './NoteTypeMaxOrderByAggregateInputSchema';
import { NoteTypeMinOrderByAggregateInputSchema } from './NoteTypeMinOrderByAggregateInputSchema';

export const NoteTypeOrderByWithAggregationInputSchema: z.ZodType<Prisma.NoteTypeOrderByWithAggregationInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => NoteTypeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => NoteTypeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => NoteTypeMinOrderByAggregateInputSchema).optional()
}).strict();

export default NoteTypeOrderByWithAggregationInputSchema;
