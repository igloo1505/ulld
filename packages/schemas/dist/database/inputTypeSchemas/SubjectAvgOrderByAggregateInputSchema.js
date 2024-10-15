import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const SubjectAvgOrderByAggregateInputSchema = z.object({
    kanbanId: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default SubjectAvgOrderByAggregateInputSchema;
