import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { MdxNoteUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './MdxNoteUncheckedUpdateManyWithoutTopicsNestedInputSchema.js';
import { IpynbUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './IpynbUncheckedUpdateManyWithoutTopicsNestedInputSchema.js';
import { QAPairUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './QAPairUncheckedUpdateManyWithoutTopicsNestedInputSchema.js';
import { ToDoUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './ToDoUncheckedUpdateManyWithoutTopicsNestedInputSchema.js';
import { ToDoListUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './ToDoListUncheckedUpdateManyWithoutTopicsNestedInputSchema.js';
import { BibEntryUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './BibEntryUncheckedUpdateManyWithoutTopicsNestedInputSchema.js';
import { EquationUncheckedUpdateManyWithoutTopicsNestedInputSchema } from './EquationUncheckedUpdateManyWithoutTopicsNestedInputSchema.js';
export const TopicUncheckedUpdateWithoutPracticeExamInputSchema: z.ZodType<Prisma.TopicUncheckedUpdateWithoutPracticeExamInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  kanbanId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastAccess: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  MdxNotes: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  QAPair: z.lazy(() => QAPairUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedUpdateManyWithoutTopicsNestedInputSchema).optional()
}).strict();
export default TopicUncheckedUpdateWithoutPracticeExamInputSchema;