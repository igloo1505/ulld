import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
export const DefinitionOrderByRelationAggregateInputSchema = z.object({
    _count: z.lazy(() => SortOrderSchema).optional()
}).strict();
export default DefinitionOrderByRelationAggregateInputSchema;
