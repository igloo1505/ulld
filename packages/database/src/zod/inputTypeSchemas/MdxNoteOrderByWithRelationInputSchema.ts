import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TopicOrderByRelationAggregateInputSchema } from './TopicOrderByRelationAggregateInputSchema';
import { SubjectOrderByRelationAggregateInputSchema } from './SubjectOrderByRelationAggregateInputSchema';
import { TagOrderByRelationAggregateInputSchema } from './TagOrderByRelationAggregateInputSchema';
import { BibEntryOrderByRelationAggregateInputSchema } from './BibEntryOrderByRelationAggregateInputSchema';
import { SequentialNoteListOrderByWithRelationInputSchema } from './SequentialNoteListOrderByWithRelationInputSchema';
import { ReadingListOrderByRelationAggregateInputSchema } from './ReadingListOrderByRelationAggregateInputSchema';
import { EquationOrderByRelationAggregateInputSchema } from './EquationOrderByRelationAggregateInputSchema';
import { DefinitionOrderByRelationAggregateInputSchema } from './DefinitionOrderByRelationAggregateInputSchema';
import { ToDoOrderByRelationAggregateInputSchema } from './ToDoOrderByRelationAggregateInputSchema';
import { MdxNoteOrderByRelevanceInputSchema } from './MdxNoteOrderByRelevanceInputSchema';

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
