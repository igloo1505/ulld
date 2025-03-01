import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const DJTCountOrderByAggregateInputSchema: z.ZodType<Prisma.DJTCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  data: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default DJTCountOrderByAggregateInputSchema;