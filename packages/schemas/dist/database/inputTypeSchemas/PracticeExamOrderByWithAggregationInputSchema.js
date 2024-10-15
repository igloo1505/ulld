import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { PracticeExamCountOrderByAggregateInputSchema } from './PracticeExamCountOrderByAggregateInputSchema.js';
import { PracticeExamAvgOrderByAggregateInputSchema } from './PracticeExamAvgOrderByAggregateInputSchema.js';
import { PracticeExamMaxOrderByAggregateInputSchema } from './PracticeExamMaxOrderByAggregateInputSchema.js';
import { PracticeExamMinOrderByAggregateInputSchema } from './PracticeExamMinOrderByAggregateInputSchema.js';
import { PracticeExamSumOrderByAggregateInputSchema } from './PracticeExamSumOrderByAggregateInputSchema.js';
export const PracticeExamOrderByWithAggregationInputSchema = z.object({
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
