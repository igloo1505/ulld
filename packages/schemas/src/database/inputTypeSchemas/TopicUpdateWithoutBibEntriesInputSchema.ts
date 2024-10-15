import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { MdxNoteUpdateManyWithoutTopicsNestedInputSchema } from './MdxNoteUpdateManyWithoutTopicsNestedInputSchema.js';
import { IpynbUpdateManyWithoutTopicsNestedInputSchema } from './IpynbUpdateManyWithoutTopicsNestedInputSchema.js';
import { QAPairUpdateManyWithoutTopicsNestedInputSchema } from './QAPairUpdateManyWithoutTopicsNestedInputSchema.js';
import { PracticeExamUpdateManyWithoutTopicsNestedInputSchema } from './PracticeExamUpdateManyWithoutTopicsNestedInputSchema.js';
import { ToDoUpdateManyWithoutTopicsNestedInputSchema } from './ToDoUpdateManyWithoutTopicsNestedInputSchema.js';
import { KanbanUpdateOneWithoutTopicsNestedInputSchema } from './KanbanUpdateOneWithoutTopicsNestedInputSchema.js';
import { ToDoListUpdateManyWithoutTopicsNestedInputSchema } from './ToDoListUpdateManyWithoutTopicsNestedInputSchema.js';
import { EquationUpdateManyWithoutTopicsNestedInputSchema } from './EquationUpdateManyWithoutTopicsNestedInputSchema.js';
export const TopicUpdateWithoutBibEntriesInputSchema: z.ZodType<Prisma.TopicUpdateWithoutBibEntriesInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastAccess: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  MdxNotes: z.lazy(() => MdxNoteUpdateManyWithoutTopicsNestedInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUpdateManyWithoutTopicsNestedInputSchema).optional(),
  QAPair: z.lazy(() => QAPairUpdateManyWithoutTopicsNestedInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUpdateManyWithoutTopicsNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUpdateManyWithoutTopicsNestedInputSchema).optional(),
  Kanban: z.lazy(() => KanbanUpdateOneWithoutTopicsNestedInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUpdateManyWithoutTopicsNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUpdateManyWithoutTopicsNestedInputSchema).optional()
}).strict();
export default TopicUpdateWithoutBibEntriesInputSchema;