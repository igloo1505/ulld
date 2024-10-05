import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MdxNoteOrderByRelationAggregateInputSchema } from './MdxNoteOrderByRelationAggregateInputSchema';
import { IpynbOrderByRelationAggregateInputSchema } from './IpynbOrderByRelationAggregateInputSchema';
import { QAPairOrderByRelationAggregateInputSchema } from './QAPairOrderByRelationAggregateInputSchema';
import { PracticeExamOrderByRelationAggregateInputSchema } from './PracticeExamOrderByRelationAggregateInputSchema';
import { KanbanOrderByWithRelationInputSchema } from './KanbanOrderByWithRelationInputSchema';
import { ToDoListOrderByRelationAggregateInputSchema } from './ToDoListOrderByRelationAggregateInputSchema';
import { ToDoOrderByRelationAggregateInputSchema } from './ToDoOrderByRelationAggregateInputSchema';
import { BibEntryOrderByRelationAggregateInputSchema } from './BibEntryOrderByRelationAggregateInputSchema';
import { EquationOrderByRelationAggregateInputSchema } from './EquationOrderByRelationAggregateInputSchema';
import { SubjectOrderByRelevanceInputSchema } from './SubjectOrderByRelevanceInputSchema';

export const SubjectOrderByWithRelationInputSchema: z.ZodType<Prisma.SubjectOrderByWithRelationInput> = z.object({
  value: z.lazy(() => SortOrderSchema).optional(),
  kanbanId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  lastAccess: z.lazy(() => SortOrderSchema).optional(),
  MdxNotes: z.lazy(() => MdxNoteOrderByRelationAggregateInputSchema).optional(),
  IpynbNotes: z.lazy(() => IpynbOrderByRelationAggregateInputSchema).optional(),
  QaPair: z.lazy(() => QAPairOrderByRelationAggregateInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamOrderByRelationAggregateInputSchema).optional(),
  Kanban: z.lazy(() => KanbanOrderByWithRelationInputSchema).optional(),
  todoList: z.lazy(() => ToDoListOrderByRelationAggregateInputSchema).optional(),
  toDo: z.lazy(() => ToDoOrderByRelationAggregateInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryOrderByRelationAggregateInputSchema).optional(),
  equations: z.lazy(() => EquationOrderByRelationAggregateInputSchema).optional(),
  _relevance: z.lazy(() => SubjectOrderByRelevanceInputSchema).optional()
}).strict();

export default SubjectOrderByWithRelationInputSchema;
