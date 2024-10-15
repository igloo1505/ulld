import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const NoteTypeMinOrderByAggregateInputSchema: z.ZodType<Prisma.NoteTypeMinOrderByAggregateInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default NoteTypeMinOrderByAggregateInputSchema;