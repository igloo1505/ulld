import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { SortOrderInputSchema } from '../SortOrderInputSchema.js';
import { TagOrderByRelationAggregateInputSchema } from '../TagOrderByRelationAggregateInputSchema.js';
import { TopicOrderByRelationAggregateInputSchema } from '../TopicOrderByRelationAggregateInputSchema.js';
import { SubjectOrderByRelationAggregateInputSchema } from '../SubjectOrderByRelationAggregateInputSchema.js';
import { BibEntryOrderByRelationAggregateInputSchema } from '../BibEntryOrderByRelationAggregateInputSchema.js';
import { SequentialNoteListOrderByWithRelationInputSchema } from '../SequentialNoteListOrderByWithRelationInputSchema.js';
import { ReadingListOrderByRelationAggregateInputSchema } from '../ReadingListOrderByRelationAggregateInputSchema.js';
import { IpynbOrderByRelevanceInputSchema } from '../IpynbOrderByRelevanceInputSchema.js';
export const IpynbOrderByWithRelationInputSchema: z.ZodType<Prisma.IpynbOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rootRelativePath: z.lazy(() => SortOrderSchema).optional(),
  isProtected: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  latexTitle: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  citationsListOrder: z.lazy(() => SortOrderSchema).optional(),
  importantValues: z.lazy(() => SortOrderSchema).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  outgoingQuickLinks: z.lazy(() => SortOrderSchema).optional(),
  raw: z.lazy(() => SortOrderSchema).optional(),
  sequentialKey: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  sequentialIndex: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  bookmarked: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  topics: z.lazy(() => TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: z.lazy(() => SubjectOrderByRelationAggregateInputSchema).optional(),
  citations: z.lazy(() => BibEntryOrderByRelationAggregateInputSchema).optional(),
  sequentialList: z.lazy(() => SequentialNoteListOrderByWithRelationInputSchema).optional(),
  readingList: z.lazy(() => ReadingListOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => IpynbOrderByRelevanceInputSchema).optional()
}).strict();
export default IpynbOrderByWithRelationInputSchema;