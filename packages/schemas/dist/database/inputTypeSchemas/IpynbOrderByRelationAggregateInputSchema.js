import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const IpynbOrderByRelationAggregateInputSchema = z.object({
    _count: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default IpynbOrderByRelationAggregateInputSchema;
