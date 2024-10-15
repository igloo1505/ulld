import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema.js';
import { IntNullableFilterSchema } from './IntNullableFilterSchema.js';
import { DateTimeFilterSchema } from './DateTimeFilterSchema.js';
import { MdxNoteListRelationFilterSchema } from './MdxNoteListRelationFilterSchema.js';
import { BibEntryListRelationFilterSchema } from './BibEntryListRelationFilterSchema.js';
import { IpynbListRelationFilterSchema } from './IpynbListRelationFilterSchema.js';
import { QAPairListRelationFilterSchema } from './QAPairListRelationFilterSchema.js';
import { PracticeExamListRelationFilterSchema } from './PracticeExamListRelationFilterSchema.js';
import { EquationListRelationFilterSchema } from './EquationListRelationFilterSchema.js';
import { ToDoListRelationFilterSchema } from './ToDoListRelationFilterSchema.js';
import { KanbanNullableRelationFilterSchema } from './KanbanNullableRelationFilterSchema.js';
import { KanbanWhereInputSchema } from './KanbanWhereInputSchema.js';
import { ToDoListListRelationFilterSchema } from './ToDoListListRelationFilterSchema.js';
export const TagWhereInputSchema = z.object({
    AND: z.union([z.lazy(() => TagWhereInputSchema), z.lazy(() => TagWhereInputSchema).array()]).optional(),
    OR: z.lazy(() => TagWhereInputSchema).array().optional(),
    NOT: z.union([z.lazy(() => TagWhereInputSchema), z.lazy(() => TagWhereInputSchema).array()]).optional(),
    value: z.union([z.lazy(() => StringFilterSchema), z.string()]).optional(),
    kanbanId: z.union([z.lazy(() => IntNullableFilterSchema), z.number()]).optional().nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    lastAccess: z.union([z.lazy(() => DateTimeFilterSchema), z.coerce.date()]).optional(),
    MdxNotes: z.lazy(() => MdxNoteListRelationFilterSchema).optional(),
    bibEntries: z.lazy(() => BibEntryListRelationFilterSchema).optional(),
    ipynbNotes: z.lazy(() => IpynbListRelationFilterSchema).optional(),
    QAPair: z.lazy(() => QAPairListRelationFilterSchema).optional(),
    practiceExam: z.lazy(() => PracticeExamListRelationFilterSchema).optional(),
    equations: z.lazy(() => EquationListRelationFilterSchema).optional(),
    toDo: z.lazy(() => ToDoListRelationFilterSchema).optional(),
    Kanban: z.union([z.lazy(() => KanbanNullableRelationFilterSchema), z.lazy(() => KanbanWhereInputSchema)]).optional().nullable(),
    todoList: z.lazy(() => ToDoListListRelationFilterSchema).optional()
}).strict();
export default TagWhereInputSchema;
