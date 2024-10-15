import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { KanBanListOrderByRelationAggregateInputSchema } from './KanBanListOrderByRelationAggregateInputSchema.js';
import { TagOrderByRelationAggregateInputSchema } from './TagOrderByRelationAggregateInputSchema.js';
import { SubjectOrderByRelationAggregateInputSchema } from './SubjectOrderByRelationAggregateInputSchema.js';
import { TopicOrderByRelationAggregateInputSchema } from './TopicOrderByRelationAggregateInputSchema.js';
import { KanbanOrderByRelevanceInputSchema } from './KanbanOrderByRelevanceInputSchema.js';
export const KanbanOrderByWithRelationInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    lastUpdate: z.lazy(() => SortOrderSchema).optional(),
    lists: z.lazy(() => KanBanListOrderByRelationAggregateInputSchema).optional(),
    tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
    subjects: z.lazy(() => SubjectOrderByRelationAggregateInputSchema).optional(),
    topics: z.lazy(() => TopicOrderByRelationAggregateInputSchema).optional(),
    _relevance: z.lazy(() => KanbanOrderByRelevanceInputSchema).optional()
}).strict();
export default KanbanOrderByWithRelationInputSchema;
