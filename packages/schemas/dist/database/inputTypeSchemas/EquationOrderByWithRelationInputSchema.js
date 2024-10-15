import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema.js';
import { SortOrderInputSchema } from './SortOrderInputSchema.js';
import { RelatedValuesOrderByRelationAggregateInputSchema } from './RelatedValuesOrderByRelationAggregateInputSchema.js';
import { TagOrderByRelationAggregateInputSchema } from './TagOrderByRelationAggregateInputSchema.js';
import { TopicOrderByRelationAggregateInputSchema } from './TopicOrderByRelationAggregateInputSchema.js';
import { SubjectOrderByRelationAggregateInputSchema } from './SubjectOrderByRelationAggregateInputSchema.js';
import { MdxNoteOrderByRelationAggregateInputSchema } from './MdxNoteOrderByRelationAggregateInputSchema.js';
import { EquationOrderByRelevanceInputSchema } from './EquationOrderByRelevanceInputSchema.js';
export const EquationOrderByWithRelationInputSchema = z.object({
    id: z.lazy(() => SortOrderSchema).optional(),
    equationId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    desc: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    content: z.lazy(() => SortOrderSchema).optional(),
    asPython: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema)]).optional(),
    variableLegend: z.lazy(() => SortOrderSchema).optional(),
    variables: z.lazy(() => SortOrderSchema).optional(),
    keywords: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    lastAccess: z.lazy(() => SortOrderSchema).optional(),
    relatedValues: z.lazy(() => RelatedValuesOrderByRelationAggregateInputSchema).optional(),
    tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
    topics: z.lazy(() => TopicOrderByRelationAggregateInputSchema).optional(),
    subjects: z.lazy(() => SubjectOrderByRelationAggregateInputSchema).optional(),
    mdxNotes: z.lazy(() => MdxNoteOrderByRelationAggregateInputSchema).optional(),
    _relevance: z.lazy(() => EquationOrderByRelevanceInputSchema).optional()
}).strict();
export default EquationOrderByWithRelationInputSchema;
