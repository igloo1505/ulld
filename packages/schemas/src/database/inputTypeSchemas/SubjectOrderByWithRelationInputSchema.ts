import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SortOrderSchema } from '../SortOrderSchema.js';
import { SortOrderInputSchema } from '../SortOrderInputSchema.js';
import { MdxNoteOrderByRelationAggregateInputSchema } from '../MdxNoteOrderByRelationAggregateInputSchema.js';
import { IpynbOrderByRelationAggregateInputSchema } from '../IpynbOrderByRelationAggregateInputSchema.js';
import { QAPairOrderByRelationAggregateInputSchema } from '../QAPairOrderByRelationAggregateInputSchema.js';
import { PracticeExamOrderByRelationAggregateInputSchema } from '../PracticeExamOrderByRelationAggregateInputSchema.js';
import { KanbanOrderByWithRelationInputSchema } from '../KanbanOrderByWithRelationInputSchema.js';
import { ToDoListOrderByRelationAggregateInputSchema } from '../ToDoListOrderByRelationAggregateInputSchema.js';
import { ToDoOrderByRelationAggregateInputSchema } from '../ToDoOrderByRelationAggregateInputSchema.js';
import { BibEntryOrderByRelationAggregateInputSchema } from '../BibEntryOrderByRelationAggregateInputSchema.js';
import { EquationOrderByRelationAggregateInputSchema } from '../EquationOrderByRelationAggregateInputSchema.js';
import { SubjectOrderByRelevanceInputSchema } from '../SubjectOrderByRelevanceInputSchema.js';
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