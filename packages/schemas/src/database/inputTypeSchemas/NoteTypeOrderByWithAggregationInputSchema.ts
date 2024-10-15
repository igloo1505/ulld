import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { NoteTypeCountOrderByAggregateInputSchema } from './NoteTypeCountOrderByAggregateInputSchema.js';
import { NoteTypeMaxOrderByAggregateInputSchema } from './NoteTypeMaxOrderByAggregateInputSchema.js';
import { NoteTypeMinOrderByAggregateInputSchema } from './NoteTypeMinOrderByAggregateInputSchema.js';
export const NoteTypeOrderByWithAggregationInputSchema: z.ZodType<Prisma.NoteTypeOrderByWithAggregationInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => NoteTypeCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => NoteTypeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => NoteTypeMinOrderByAggregateInputSchema).optional()
}).strict();
export default NoteTypeOrderByWithAggregationInputSchema;