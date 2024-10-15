import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SortOrderInputSchema } from './SortOrderInputSchema.js';
import { BibEntryOrderByRelationAggregateInputSchema } from './BibEntryOrderByRelationAggregateInputSchema.js';
import { CitationsGroupOrderByRelevanceInputSchema } from './CitationsGroupOrderByRelevanceInputSchema.js';
export const CitationsGroupOrderByWithRelationInputSchema = z.object({
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    entries: z.lazy(() => BibEntryOrderByRelationAggregateInputSchema).optional(),
    _relevance: z.lazy(() => CitationsGroupOrderByRelevanceInputSchema).optional()
}).strict();
export default CitationsGroupOrderByWithRelationInputSchema;
