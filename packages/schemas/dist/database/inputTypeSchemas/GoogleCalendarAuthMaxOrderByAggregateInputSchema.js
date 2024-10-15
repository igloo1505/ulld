import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const GoogleCalendarAuthMaxOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    auth: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default GoogleCalendarAuthMaxOrderByAggregateInputSchema;
