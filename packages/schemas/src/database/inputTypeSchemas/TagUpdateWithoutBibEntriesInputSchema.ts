import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MdxNoteUpdateManyWithoutTagsNestedInputSchema } from './MdxNoteUpdateManyWithoutTagsNestedInputSchema';
import { IpynbUpdateManyWithoutTagsNestedInputSchema } from './IpynbUpdateManyWithoutTagsNestedInputSchema';
import { QAPairUpdateManyWithoutTagsNestedInputSchema } from './QAPairUpdateManyWithoutTagsNestedInputSchema';
import { PracticeExamUpdateManyWithoutTagsNestedInputSchema } from './PracticeExamUpdateManyWithoutTagsNestedInputSchema';
import { EquationUpdateManyWithoutTagsNestedInputSchema } from './EquationUpdateManyWithoutTagsNestedInputSchema';
import { ToDoUpdateManyWithoutTagsNestedInputSchema } from './ToDoUpdateManyWithoutTagsNestedInputSchema';
import { KanbanUpdateOneWithoutTagsNestedInputSchema } from './KanbanUpdateOneWithoutTagsNestedInputSchema';
import { ToDoListUpdateManyWithoutTagsNestedInputSchema } from './ToDoListUpdateManyWithoutTagsNestedInputSchema';

export const TagUpdateWithoutBibEntriesInputSchema: z.ZodType<Prisma.TagUpdateWithoutBibEntriesInput> = z.object({
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastAccess: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  MdxNotes: z.lazy(() => MdxNoteUpdateManyWithoutTagsNestedInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUpdateManyWithoutTagsNestedInputSchema).optional(),
  QAPair: z.lazy(() => QAPairUpdateManyWithoutTagsNestedInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUpdateManyWithoutTagsNestedInputSchema).optional(),
  equations: z.lazy(() => EquationUpdateManyWithoutTagsNestedInputSchema).optional(),
  toDo: z.lazy(() => ToDoUpdateManyWithoutTagsNestedInputSchema).optional(),
  Kanban: z.lazy(() => KanbanUpdateOneWithoutTagsNestedInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUpdateManyWithoutTagsNestedInputSchema).optional()
}).strict();

export default TagUpdateWithoutBibEntriesInputSchema;
