import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const NoteTypeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.NoteTypeMaxOrderByAggregateInput> = z.object({
  name: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default NoteTypeMaxOrderByAggregateInputSchema;