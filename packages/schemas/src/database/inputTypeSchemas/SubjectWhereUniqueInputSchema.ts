import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectWhereInputSchema } from '../SubjectWhereInputSchema.js';
import { IntNullableFilterSchema } from '../IntNullableFilterSchema.js';
import { DateTimeFilterSchema } from '../DateTimeFilterSchema.js';
import { MdxNoteListRelationFilterSchema } from '../MdxNoteListRelationFilterSchema.js';
import { IpynbListRelationFilterSchema } from '../IpynbListRelationFilterSchema.js';
import { QAPairListRelationFilterSchema } from '../QAPairListRelationFilterSchema.js';
import { PracticeExamListRelationFilterSchema } from '../PracticeExamListRelationFilterSchema.js';
import { KanbanNullableRelationFilterSchema } from '../KanbanNullableRelationFilterSchema.js';
import { KanbanWhereInputSchema } from '../KanbanWhereInputSchema.js';
import { ToDoListListRelationFilterSchema } from '../ToDoListListRelationFilterSchema.js';
import { ToDoListRelationFilterSchema } from '../ToDoListRelationFilterSchema.js';
import { BibEntryListRelationFilterSchema } from '../BibEntryListRelationFilterSchema.js';
import { EquationListRelationFilterSchema } from '../EquationListRelationFilterSchema.js';
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