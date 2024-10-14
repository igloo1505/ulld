import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PracticeExamCountOrderByAggregateInputSchema } from './PracticeExamCountOrderByAggregateInputSchema';
import { PracticeExamAvgOrderByAggregateInputSchema } from './PracticeExamAvgOrderByAggregateInputSchema';
import { PracticeExamMaxOrderByAggregateInputSchema } from './PracticeExamMaxOrderByAggregateInputSchema';
import { PracticeExamMinOrderByAggregateInputSchema } from './PracticeExamMinOrderByAggregateInputSchema';
import { PracticeExamSumOrderByAggregateInputSchema } from './PracticeExamSumOrderByAggregateInputSchema';

export const PracticeExamOrderByWithAggregationInputSchema: z.ZodType<Prisma.PracticeExamOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  correctCount: z.lazy(() => SortOrderSchema).optional(),
  inCorrectCount: z.lazy(() => SortOrderSchema).optional(),
  timeLimitInSeconds: z.lazy(() => SortOrderSchema).optional(),
  timeCompletedInSeconds: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PracticeExamCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PracticeExamAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PracticeExamMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PracticeExamMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PracticeExamSumOrderByAggregateInputSchema).optional()
}).strict();

export default PracticeExamOrderByWithAggregationInputSchema;
