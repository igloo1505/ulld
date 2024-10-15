import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const AutoSettingMaxOrderByAggregateInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    glob: z.lazy(() => SortOrderSchema).optional(),
    value: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default AutoSettingMaxOrderByAggregateInputSchema;
