import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { IpynbUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './IpynbUncheckedUpdateManyWithoutTopicsNestedInputSchema';
import { QAPairUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './QAPairUncheckedUpdateManyWithoutTopicsNestedInputSchema';
import { PracticeExamUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './PracticeExamUncheckedUpdateManyWithoutTopicsNestedInputSchema';
import { ToDoUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './ToDoUncheckedUpdateManyWithoutTopicsNestedInputSchema';
import { ToDoListUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './ToDoListUncheckedUpdateManyWithoutTopicsNestedInputSchema';
import { BibEntryUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './BibEntryUncheckedUpdateManyWithoutTopicsNestedInputSchema';
import { EquationUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './EquationUncheckedUpdateManyWithoutTopicsNestedInputSchema';

export const TopicUncheckedUpdateWithoutMdxNotesInputSchema: z.ZodType<Prisma.TopicUncheckedUpdateWithoutMdxNotesInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kanbanId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastAccess: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  QAPair: z.lazy(() => QAPairUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional()
}).strict();

export default TopicUncheckedUpdateWithoutMdxNotesInputSchema;
