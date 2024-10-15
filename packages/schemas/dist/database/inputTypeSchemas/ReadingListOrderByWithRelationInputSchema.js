import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SortOrderInputSchema } from './SortOrderInputSchema.js';
import { BibEntryOrderByRelationAggregateInputSchema } from './BibEntryOrderByRelationAggregateInputSchema.js';
import { MdxNoteOrderByRelationAggregateInputSchema } from './MdxNoteOrderByRelationAggregateInputSchema.js';
import { IpynbOrderByRelationAggregateInputSchema } from './IpynbOrderByRelationAggregateInputSchema.js';
import { ReadingListOrderByRelevanceInputSchema } from './ReadingListOrderByRelevanceInputSchema.js';
export const ReadingListOrderByWithRelationInputSchema = z.object({
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    lastUpdate: z.lazy(() => SortOrderSchema).optional(),
    bibEntries: z.lazy(() => BibEntryOrderByRelationAggregateInputSchema).optional(),
    mdxNotes: z.lazy(() => MdxNoteOrderByRelationAggregateInputSchema).optional(),
    ipynbNotes: z.lazy(() => IpynbOrderByRelationAggregateInputSchema).optional(),
    _relevance: z.lazy(() => ReadingListOrderByRelevanceInputSchema).optional()
}).strict();
export default ReadingListOrderByWithRelationInputSchema;
