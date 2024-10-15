import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { BibEntryOrderByRelationAggregateInputSchema } from './BibEntryOrderByRelationAggregateInputSchema.js';
import { BibOrderByRelevanceInputSchema } from './BibOrderByRelevanceInputSchema.js';
export const BibOrderByWithRelationInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    filename: z.lazy(() => SortOrderSchema).optional(),
    firstSync: z.lazy(() => SortOrderSchema).optional(),
    lastSync: z.lazy(() => SortOrderSchema).optional(),
    entries: z.lazy(() => BibEntryOrderByRelationAggregateInputSchema).optional(),
    _relevance: z.lazy(() => BibOrderByRelevanceInputSchema).optional()
}).strict();
export default BibOrderByWithRelationInputSchema;
