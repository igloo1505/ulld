import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MdxNoteUncheckedUpdateManyWithoutSubjectsNestedInputSchema } from './MdxNoteUncheckedUpdateManyWithoutSubjectsNestedInputSchema';
import { QAPairUncheckedUpdateManyWithoutSubjectsNestedInputSchema } from './QAPairUncheckedUpdateManyWithoutSubjectsNestedInputSchema';
import { PracticeExamUncheckedUpdateManyWithoutSubjectsNestedInputSchema } from './PracticeExamUncheckedUpdateManyWithoutSubjectsNestedInputSchema';
import { ToDoListUncheckedUpdateManyWithoutSubjectsNestedInputSchema } from './ToDoListUncheckedUpdateManyWithoutSubjectsNestedInputSchema';
import { ToDoUncheckedUpdateManyWithoutSubjectsNestedInputSchema } from './ToDoUncheckedUpdateManyWithoutSubjectsNestedInputSchema';
import { BibEntryUncheckedUpdateManyWithoutSubjectsNestedInputSchema } from './BibEntryUncheckedUpdateManyWithoutSubjectsNestedInputSchema';
import { EquationUncheckedUpdateManyWithoutSubjectsNestedInputSchema } from './EquationUncheckedUpdateManyWithoutSubjectsNestedInputSchema';

export const SubjectUncheckedUpdateWithoutIpynbNotesInputSchema: z.ZodType<Prisma.SubjectUncheckedUpdateWithoutIpynbNotesInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kanbanId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastAccess: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  MdxNotes: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  QaPair: z.lazy(() => QAPairUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedUpdateManyWithoutSubjectsNestedInputSchema).optional()
}).strict();

export default SubjectUncheckedUpdateWithoutIpynbNotesInputSchema;