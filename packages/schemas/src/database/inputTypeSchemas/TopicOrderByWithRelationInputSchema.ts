import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MdxNoteOrderByRelationAggregateInputSchema } from './MdxNoteOrderByRelationAggregateInputSchema';
import { IpynbOrderByRelationAggregateInputSchema } from './IpynbOrderByRelationAggregateInputSchema';
import { QAPairOrderByRelationAggregateInputSchema } from './QAPairOrderByRelationAggregateInputSchema';
import { PracticeExamOrderByRelationAggregateInputSchema } from './PracticeExamOrderByRelationAggregateInputSchema';
import { ToDoOrderByRelationAggregateInputSchema } from './ToDoOrderByRelationAggregateInputSchema';
import { KanbanOrderByWithRelationInputSchema } from './KanbanOrderByWithRelationInputSchema';
import { ToDoListOrderByRelationAggregateInputSchema } from './ToDoListOrderByRelationAggregateInputSchema';
import { BibEntryOrderByRelationAggregateInputSchema } from './BibEntryOrderByRelationAggregateInputSchema';
import { EquationOrderByRelationAggregateInputSchema } from './EquationOrderByRelationAggregateInputSchema';
import { TopicOrderByRelevanceInputSchema } from './TopicOrderByRelevanceInputSchema';

export const TopicOrderByWithRelationInputSchema: z.ZodType<Prisma.TopicOrderByWithRelationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  kanbanId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  MdxNotes: z.lazy(() => MdxNoteOrderByRelationAggregateInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbOrderByRelationAggregateInputSchema).optional(),
  QAPair: z.lazy(() => QAPairOrderByRelationAggregateInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamOrderByRelationAggregateInputSchema).optional(),
  toDo: z.lazy(() => ToDoOrderByRelationAggregateInputSchema).optional(),
  Kanban: z.lazy(() => KanbanOrderByWithRelationInputSchema).optional(),
  todoList: z.lazy(() => ToDoListOrderByRelationAggregateInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryOrderByRelationAggregateInputSchema).optional(),
  equations: z.lazy(() => EquationOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => TopicOrderByRelevanceInputSchema).optional()
}).strict();

export default TopicOrderByWithRelationInputSchema;
