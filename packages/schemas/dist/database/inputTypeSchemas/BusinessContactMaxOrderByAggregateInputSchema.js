import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const BusinessContactMaxOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    companyName: z.lazy(() => SortOrderSchema).optional(),
    contactName: z.lazy(() => SortOrderSchema).optional(),
    contactPreference: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    phone: z.lazy(() => SortOrderSchema).optional(),
    message: z.lazy(() => SortOrderSchema).optional(),
    purpose: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default BusinessContactMaxOrderByAggregateInputSchema;
