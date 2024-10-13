import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from '../StringFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from '../DateTimeFieldUpdateOperationsInputSchema.js';
import { MdxNoteUpdateManyWithoutSubjectsNestedInputSchema } from '../MdxNoteUpdateManyWithoutSubjectsNestedInputSchema.js';
import { IpynbUpdateManyWithoutSubjectsNestedInputSchema } from '../IpynbUpdateManyWithoutSubjectsNestedInputSchema.js';
import { QAPairUpdateManyWithoutSubjectsNestedInputSchema } from '../QAPairUpdateManyWithoutSubjectsNestedInputSchema.js';
import { PracticeExamUpdateManyWithoutSubjectsNestedInputSchema } from '../PracticeExamUpdateManyWithoutSubjectsNestedInputSchema.js';
import { KanbanUpdateOneWithoutSubjectsNestedInputSchema } from '../KanbanUpdateOneWithoutSubjectsNestedInputSchema.js';
import { ToDoUpdateManyWithoutSubjectsNestedInputSchema } from '../ToDoUpdateManyWithoutSubjectsNestedInputSchema.js';
import { BibEntryUpdateManyWithoutSubjectsNestedInputSchema } from '../BibEntryUpdateManyWithoutSubjectsNestedInputSchema.js';
import { EquationUpdateManyWithoutSubjectsNestedInputSchema } from '../EquationUpdateManyWithoutSubjectsNestedInputSchema.js';
export const SubjectUpdateWithoutTodoListInputSchema: z.ZodType<Prisma.SubjectUpdateWithoutTodoListInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastAccess: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  MdxNotes: z.lazy(() => MdxNoteUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  IpynbNotes: z.lazy(() => IpynbUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  QaPair: z.lazy(() => QAPairUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  Kanban: z.lazy(() => KanbanUpdateOneWithoutSubjectsNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUpdateManyWithoutSubjectsNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUpdateManyWithoutSubjectsNestedInputSchema).optional()
}).strict();
export default SubjectUpdateWithoutTodoListInputSchema;