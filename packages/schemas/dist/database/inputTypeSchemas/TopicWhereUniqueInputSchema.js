import { z } from 'zod';
import { TopicWhereInputSchema } from './TopicWhereInputSchema.js';
import { IntNullableFilterSchema } from './IntNullableFilterSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
import { MdxNoteListRelationFilterSchema } from './MdxNoteListRelationFilterSchema.js';
import { IpynbListRelationFilterSchema } from './IpynbListRelationFilterSchema.js';
import { QAPairListRelationFilterSchema } from './QAPairListRelationFilterSchema.js';
import { PracticeExamListRelationFilterSchema } from './PracticeExamListRelationFilterSchema.js';
import { ToDoListRelationFilterSchema } from './ToDoListRelationFilterSchema.js';
import { KanbanNullableRelationFilterSchema } from './KanbanNullableRelationFilterSchema.js';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema.js';
import { ToDoListListRelationFilterSchema } from './ToDoListListRelationFilterSchema.js';
import { BibEntryListRelationFilterSchema } from './BibEntryListRelationFilterSchema.js';
import { EquationListRelationFilterSchema } from './EquationListRelationFilterSchema.js';
export const TopicWhereUniqueInputSchema = z.object({
    value: z.string()
})
    .and(z.object({
    value: z.string().optional(),
    AND: z.union([z.lazy(() => TopicWhereInputSchema), z.lazy(() => TopicWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => TopicWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => TopicWhereInputSchema), z.lazy(() => TopicWhereInputSchema).array()]).optional(),
    kanbanId: z.union([z.lazy(() => IntNullableFilterSchema), z.number().int()]).optional().nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    lastAccess: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    MdxNotes: z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
    ipynbNotes: z.lazy(() => IpynbListRelationFilterSchema).optional(),
    QAPair: z.lazy(() => QAPairListRelationFilterSchema).optional(),
    practiceExam: z.lazy(() => PracticeExamListRelationFilterSchema).optional(),
    toDo: z.lazy(() => ToDoListRelationFilterSchema).optional(),
    Kanban: z.union([z.lazy(() => KanbanNullableRelationFilterSchema), z.lazy(() => KanbanWhereInputSchema)]).optional().nullable(),
    todoList: z.lazy(() => ToDoListListRelationFilterSchema).optional(),
    bibEntries: z.lazy(() => BibEntryListRelationFilterSchema).optional(),
    equations: z.lazy(() => EquationListRelationFilterSchema).optional()
}).strict());
export default TopicWhereUniqueInputSchema;
