import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const QAPairAvgOrderByAggregateInputSchema: z.ZodType<Prisma.QAPairAvgOrderByAggregateInput> = z.object({
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default QAPairAvgOrderByAggregateInputSchema;