import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MdxNoteUpdateManyWithoutSubjectsNestedInputSchema } from './MdxNoteUpdateManyWithoutSubjectsNestedInputSchema';
import { IpynbUpdateManyWithoutSubjectsNestedInputSchema } from './IpynbUpdateManyWithoutSubjectsNestedInputSchema';
import { QAPairUpdateManyWithoutSubjectsNestedInputSchema } from './QAPairUpdateManyWithoutSubjectsNestedInputSchema';
import { KanbanUpdateOneWithoutSubjectsNestedInputSchema } from './KanbanUpdateOneWithoutSubjectsNestedInputSchema';
import { ToDoListUpdateManyWithoutSubjectsNestedInputSchema } from './ToDoListUpdateManyWithoutSubjectsNestedInputSchema';
import { ToDoUpdateManyWithoutSubjectsNestedInputSchema } from './ToDoUpdateManyWithoutSubjectsNestedInputSchema';
import { BibEntryUpdateManyWithoutSubjectsNestedInputSchema } from './BibEntryUpdateManyWithoutSubjectsNestedInputSchema';
import { EquationUpdateManyWithoutSubjectsNestedInputSchema } from './EquationUpdateManyWithoutSubjectsNestedInputSchema';

export const SubjectUpdateWithoutPracticeExamInputSchema: z.ZodType<Prisma.SubjectUpdateWithoutPracticeExamInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastAccess: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  MdxNotes: z.lazy(() => MdxNoteUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  IpynbNotes: z.lazy(() => IpynbUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  QaPair: z.lazy(() => QAPairUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  Kanban: z.lazy(() => KanbanUpdateOneWithoutSubjectsNestedInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUpdateManyWithoutSubjectsNestedInputSchema).optional()
}).strict();

export default SubjectUpdateWithoutPracticeExamInputSchema;
