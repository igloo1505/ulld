import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereInputSchema } from './SubjectWhereInputSchema';
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

export const SubjectWhereUniqueInputSchema: z.ZodType<Prisma.SubjectWhereUniqueInput> = z.object({
  value: z.string()
})
.and(z.object({
  value: z.string().optional(),
  AND: z.union([ z.lazy(() => SubjectWhereInputSchema),z.lazy(() => SubjectWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SubjectWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SubjectWhereInputSchema),z.lazy(() => SubjectWhereInputSchema).array() ]).optional(),
  kanbanId: z.union([ z.lazy(() => IntNullableFilterSchema),z.number().int() ]).optional().nullable(),
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
}).strict());

export default SubjectWhereUniqueInputSchema;
