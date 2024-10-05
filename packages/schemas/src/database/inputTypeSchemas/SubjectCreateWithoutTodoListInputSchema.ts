import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateNestedManyWithoutSubjectsInputSchema } from './MdxNoteCreateNestedManyWithoutSubjectsInputSchema';
import { IpynbCreateNestedManyWithoutSubjectsInputSchema } from './IpynbCreateNestedManyWithoutSubjectsInputSchema';
import { QAPairCreateNestedManyWithoutSubjectsInputSchema } from './QAPairCreateNestedManyWithoutSubjectsInputSchema';
import { PracticeExamCreateNestedManyWithoutSubjectsInputSchema } from './PracticeExamCreateNestedManyWithoutSubjectsInputSchema';
import { KanbanCreateNestedOneWithoutSubjectsInputSchema } from './KanbanCreateNestedOneWithoutSubjectsInputSchema';
import { ToDoCreateNestedManyWithoutSubjectsInputSchema } from './ToDoCreateNestedManyWithoutSubjectsInputSchema';
import { BibEntryCreateNestedManyWithoutSubjectsInputSchema } from './BibEntryCreateNestedManyWithoutSubjectsInputSchema';
import { EquationCreateNestedManyWithoutSubjectsInputSchema } from './EquationCreateNestedManyWithoutSubjectsInputSchema';

export const SubjectCreateWithoutTodoListInputSchema: z.ZodType<Prisma.SubjectCreateWithoutTodoListInput> = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  MdxNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutSubjectsInputSchema).optional(),
  IpynbNotes: z.lazy(() => IpynbCreateNestedManyWithoutSubjectsInputSchema).optional(),
  QaPair: z.lazy(() => QAPairCreateNestedManyWithoutSubjectsInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamCreateNestedManyWithoutSubjectsInputSchema).optional(),
  Kanban: z.lazy(() => KanbanCreateNestedOneWithoutSubjectsInputSchema).optional(),
  toDo: z.lazy(() => ToDoCreateNestedManyWithoutSubjectsInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryCreateNestedManyWithoutSubjectsInputSchema).optional(),
  equations: z.lazy(() => EquationCreateNestedManyWithoutSubjectsInputSchema).optional()
}).strict();

export default SubjectCreateWithoutTodoListInputSchema;
