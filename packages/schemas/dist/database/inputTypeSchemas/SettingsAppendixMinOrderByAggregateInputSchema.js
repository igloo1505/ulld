import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const SettingsAppendixMinOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    data: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default SettingsAppendixMinOrderByAggregateInputSchema;
