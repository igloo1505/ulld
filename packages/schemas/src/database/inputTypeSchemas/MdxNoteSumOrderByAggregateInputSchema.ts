import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
export const MdxNoteSumOrderByAggregateInputSchema: z.ZodType<Prisma.MdxNoteSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  importantValues: z.lazy(() => SortOrderSchema).optional(),
  sequentialIndex: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default MdxNoteSumOrderByAggregateInputSchema;