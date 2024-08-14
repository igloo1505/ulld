import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './MdxNoteUncheckedCreateNestedManyWithoutSubjectsInputSchema';
import { QAPairUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './QAPairUncheckedCreateNestedManyWithoutSubjectsInputSchema';
import { PracticeExamUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './PracticeExamUncheckedCreateNestedManyWithoutSubjectsInputSchema';
import { ToDoListUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './ToDoListUncheckedCreateNestedManyWithoutSubjectsInputSchema';
import { ToDoUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './ToDoUncheckedCreateNestedManyWithoutSubjectsInputSchema';
import { BibEntryUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './BibEntryUncheckedCreateNestedManyWithoutSubjectsInputSchema';
import { EquationUncheckedCreateNestedManyWithoutSubjectsInputSchema } from './EquationUncheckedCreateNestedManyWithoutSubjectsInputSchema';

export const SubjectUncheckedCreateWithoutIpynbNotesInputSchema: z.ZodType<Prisma.SubjectUncheckedCreateWithoutIpynbNotesInput> = z.object({
  value: z.string(),
  kanbanId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  MdxNotes: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  QaPair: z.lazy(() => QAPairUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedCreateNestedManyWithoutSubjectsInputSchema).optional()
}).strict();

export default SubjectUncheckedCreateWithoutIpynbNotesInputSchema;
