import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const QAPairCountOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    question: z.lazy(() => SortOrderSchema).optional(),
    answer: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    secondaryLabel: z.lazy(() => SortOrderSchema).optional(),
    correctCount: z.lazy(() => SortOrderSchema).optional(),
    inCorrectCount: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default QAPairCountOrderByAggregateInputSchema;
