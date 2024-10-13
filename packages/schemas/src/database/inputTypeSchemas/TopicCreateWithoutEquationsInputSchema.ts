import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteCreateNestedManyWithoutTopicsInputSchema } from '../MdxNoteCreateNestedManyWithoutTopicsInputSchema.js';
import { IpynbCreateNestedManyWithoutTopicsInputSchema } from '../IpynbCreateNestedManyWithoutTopicsInputSchema.js';
import { QAPairCreateNestedManyWithoutTopicsInputSchema } from '../QAPairCreateNestedManyWithoutTopicsInputSchema.js';
import { PracticeExamCreateNestedManyWithoutTopicsInputSchema } from '../PracticeExamCreateNestedManyWithoutTopicsInputSchema.js';
import { ToDoCreateNestedManyWithoutTopicsInputSchema } from '../ToDoCreateNestedManyWithoutTopicsInputSchema.js';
import { KanbanCreateNestedOneWithoutTopicsInputSchema } from '../KanbanCreateNestedOneWithoutTopicsInputSchema.js';
import { ToDoListCreateNestedManyWithoutTopicsInputSchema } from '../ToDoListCreateNestedManyWithoutTopicsInputSchema.js';
import { BibEntryCreateNestedManyWithoutTopicsInputSchema } from '../BibEntryCreateNestedManyWithoutTopicsInputSchema.js';
export const TopicCreateWithoutEquationsInputSchema: z.ZodType<Prisma.TopicCreateWithoutEquationsInput> = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  MdxNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutTopicsInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbCreateNestedManyWithoutTopicsInputSchema).optional(),
  QAPair: z.lazy(() => QAPairCreateNestedManyWithoutTopicsInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamCreateNestedManyWithoutTopicsInputSchema).optional(),
  toDo: z.lazy(() => ToDoCreateNestedManyWithoutTopicsInputSchema).optional(),
  Kanban: z.lazy(() => KanbanCreateNestedOneWithoutTopicsInputSchema).optional(),
  todoList: z.lazy(() => ToDoListCreateNestedManyWithoutTopicsInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryCreateNestedManyWithoutTopicsInputSchema).optional()
}).strict();
export default TopicCreateWithoutEquationsInputSchema;