import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { SortOrderInputSchema } from '../SortOrderInputSchema.js';
import { TopicOrderByRelationAggregateInputSchema } from '../TopicOrderByRelationAggregateInputSchema.js';
import { SubjectOrderByRelationAggregateInputSchema } from '../SubjectOrderByRelationAggregateInputSchema.js';
import { TagOrderByRelationAggregateInputSchema } from '../TagOrderByRelationAggregateInputSchema.js';
import { BibEntryOrderByRelationAggregateInputSchema } from '../BibEntryOrderByRelationAggregateInputSchema.js';
import { SequentialNoteListOrderByWithRelationInputSchema } from '../SequentialNoteListOrderByWithRelationInputSchema.js';
import { ReadingListOrderByRelationAggregateInputSchema } from '../ReadingListOrderByRelationAggregateInputSchema.js';
import { EquationOrderByRelationAggregateInputSchema } from '../EquationOrderByRelationAggregateInputSchema.js';
import { DefinitionOrderByRelationAggregateInputSchema } from '../DefinitionOrderByRelationAggregateInputSchema.js';
import { ToDoOrderByRelationAggregateInputSchema } from '../ToDoOrderByRelationAggregateInputSchema.js';
import { MdxNoteOrderByRelevanceInputSchema } from '../MdxNoteOrderByRelevanceInputSchema.js';
export const MdxNoteOrderByWithRelationInputSchema: z.ZodType<Prisma.MdxNoteOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  isProtected: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  dietSummaryKey: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  latexTitle: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rootRelativePath: z.lazy(() => SortOrderSchema).optional(),
  noteType: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  formatted: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  summary: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  citationsListOrder: z.lazy(() => SortOrderSchema).optional(),
  importantValues: z.lazy(() => SortOrderSchema).optional(),
  imageSrc: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  href: z.lazy(() => SortOrderSchema).optional(),
  sequentialKey: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  sequentialIndex: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  floatImages: z.lazy(() => SortOrderSchema).optional(),
  remoteUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  trackRemote: z.lazy(() => SortOrderSchema).optional(),
  outgoingQuickLinks: z.lazy(() => SortOrderSchema).optional(),
  quickLink: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  bookmarked: z.lazy(() => SortOrderSchema).optional(),
  firstSync: z.lazy(() => SortOrderSchema).optional(),
  lastSync: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  topics: z.lazy(() => TopicOrderByRelationAggregateInputSchema).optional(),
  subjects: z.lazy(() => SubjectOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => TagOrderByRelationAggregateInputSchema).optional(),
  citations: z.lazy(() => BibEntryOrderByRelationAggregateInputSchema).optional(),
  sequentialList: z.lazy(() => SequentialNoteListOrderByWithRelationInputSchema).optional(),
  ReadingList: z.lazy(() => ReadingListOrderByRelationAggregateInputSchema).optional(),
  equations: z.lazy(() => EquationOrderByRelationAggregateInputSchema).optional(),
  definitions: z.lazy(() => DefinitionOrderByRelationAggregateInputSchema).optional(),
  toDo: z.lazy(() => ToDoOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => MdxNoteOrderByRelevanceInputSchema).optional()
}).strict();
export default MdxNoteOrderByWithRelationInputSchema;