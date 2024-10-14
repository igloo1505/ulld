import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const QAPairSumOrderByAggregateInputSchema: z.ZodType<Prisma.QAPairSumOrderByAggregateInput> = z.object({
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default QAPairSumOrderByAggregateInputSchema;
