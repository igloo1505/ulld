import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const PracticeExamAvgOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    correctCount: z.lazy(() => SortOrderSchema).optional(),
    inCorrectCount: z.lazy(() => SortOrderSchema).optional(),
    timeLimitInSeconds: z.lazy(() => SortOrderSchema).optional(),
    timeCompletedInSeconds: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default PracticeExamAvgOrderByAggregateInputSchema;
