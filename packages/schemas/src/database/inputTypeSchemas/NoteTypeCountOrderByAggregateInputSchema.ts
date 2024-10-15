import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const NoteTypeCountOrderByAggregateInputSchema: z.ZodType<Prisma.NoteTypeCountOrderByAggregateInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default NoteTypeCountOrderByAggregateInputSchema;