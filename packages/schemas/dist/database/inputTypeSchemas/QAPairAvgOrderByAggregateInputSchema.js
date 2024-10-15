import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const QAPairAvgOrderByAggregateInputSchema = z.object({
    correctCount: z.lazy(() => SortOrderSchema).optional(),
    inCorrectCount: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default QAPairAvgOrderByAggregateInputSchema;
