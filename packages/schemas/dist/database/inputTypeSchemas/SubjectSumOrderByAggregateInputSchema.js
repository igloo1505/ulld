import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const SubjectSumOrderByAggregateInputSchema = z.object({
    kanbanId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default SubjectSumOrderByAggregateInputSchema;
