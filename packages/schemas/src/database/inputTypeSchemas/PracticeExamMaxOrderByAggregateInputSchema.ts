import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PracticeExamMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PracticeExamMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional(),
  timeLimitInSeconds: z.lazy(() => SortOrderSchema).optional(),
  timeCompletedInSeconds: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PracticeExamMaxOrderByAggregateInputSchema;
