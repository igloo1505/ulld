import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const WaitlistRequestMaxOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    receivedOn: z.lazy(() => SortOrderSchema).optional(),
    emailsSent: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default WaitlistRequestMaxOrderByAggregateInputSchema;
