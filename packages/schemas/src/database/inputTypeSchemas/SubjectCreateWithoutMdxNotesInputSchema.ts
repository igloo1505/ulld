import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbCreateNestedManyWithoutSubjectsInputSchema } from '../IpynbCreateNestedManyWithoutSubjectsInputSchema.js';
import { QAPairCreateNestedManyWithoutSubjectsInputSchema } from '../QAPairCreateNestedManyWithoutSubjectsInputSchema.js';
import { PracticeExamCreateNestedManyWithoutSubjectsInputSchema } from '../PracticeExamCreateNestedManyWithoutSubjectsInputSchema.js';
import { KanbanCreateNestedOneWithoutSubjectsInputSchema } from '../KanbanCreateNestedOneWithoutSubjectsInputSchema.js';
import { ToDoListCreateNestedManyWithoutSubjectsInputSchema } from '../ToDoListCreateNestedManyWithoutSubjectsInputSchema.js';
import { ToDoCreateNestedManyWithoutSubjectsInputSchema } from '../ToDoCreateNestedManyWithoutSubjectsInputSchema.js';
import { BibEntryCreateNestedManyWithoutSubjectsInputSchema } from '../BibEntryCreateNestedManyWithoutSubjectsInputSchema.js';
import { EquationCreateNestedManyWithoutSubjectsInputSchema } from '../EquationCreateNestedManyWithoutSubjectsInputSchema.js';
export const SubjectCreateWithoutMdxNotesInputSchema: z.ZodType<Prisma.SubjectCreateWithoutMdxNotesInput> = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  IpynbNotes: z.lazy(() => IpynbCreateNestedManyWithoutSubjectsInputSchema).optional(),
  QaPair: z.lazy(() => QAPairCreateNestedManyWithoutSubjectsInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamCreateNestedManyWithoutSubjectsInputSchema).optional(),
  Kanban: z.lazy(() => KanbanCreateNestedOneWithoutSubjectsInputSchema).optional(),
  todoList: z.lazy(() => ToDoListCreateNestedManyWithoutSubjectsInputSchema).optional(),
  toDo: z.lazy(() => ToDoCreateNestedManyWithoutSubjectsInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryCreateNestedManyWithoutSubjectsInputSchema).optional(),
  equations: z.lazy(() => EquationCreateNestedManyWithoutSubjectsInputSchema).optional()
}).strict();
export default SubjectCreateWithoutMdxNotesInputSchema;