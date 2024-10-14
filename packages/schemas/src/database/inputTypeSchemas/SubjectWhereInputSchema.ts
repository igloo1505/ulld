import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntNullableFilterSchema } from './IntNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { MdxNoteListRelationFilterSchema } from './MdxNoteListRelationFilterSchema';
import { IpynbListRelationFilterSchema } from './IpynbListRelationFilterSchema';
import { QAPairListRelationFilterSchema } from './QAPairListRelationFilterSchema';
import { PracticeExamListRelationFilterSchema } from './PracticeExamListRelationFilterSchema';
import { KanbanNullableRelationFilterSchema } from './KanbanNullableRelationFilterSchema';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema';
import { ToDoListListRelationFilterSchema } from './ToDoListListRelationFilterSchema';
import { ToDoListRelationFilterSchema } from './ToDoListRelationFilterSchema';
import { BibEntryListRelationFilterSchema } from './BibEntryListRelationFilterSchema';
import { EquationListRelationFilterSchema } from './EquationListRelationFilterSchema';

export const SubjectWhereInputSchema: z.ZodType<Prisma.SubjectWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SubjectWhereInputSchema),z.lazy(() => SubjectWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubjectWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubjectWhereInputSchema),z.lazy(() => SubjectWhereInputSchema).array() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  kanbanId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  lastAccess: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  MdxNotes: z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
  IpynbNotes: z.lazy(() => IpynbListRelationFilterSchema).optional(),
  QaPair: z.lazy(() => QAPairListRelationFilterSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamListRelationFilterSchema).optional(),
  Kanban: z.union([ z.lazy(() => KanbanNullableRelationFilterSchema),z.lazy(() => KanbanWhereInputSchema) ]).optional().nullable(),
  todoList: z.lazy(() => ToDoListListRelationFilterSchema).optional(),
  toDo: z.lazy(() => ToDoListRelationFilterSchema).optional(),
  bibEntries: z.lazy(() => BibEntryListRelationFilterSchema).optional(),
  equations: z.lazy(() => EquationListRelationFilterSchema).optional()
}).strict();

export default SubjectWhereInputSchema;
