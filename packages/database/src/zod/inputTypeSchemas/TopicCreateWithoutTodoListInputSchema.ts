import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateNestedManyWithoutTopicsInputSchema } from './MdxNoteCreateNestedManyWithoutTopicsInputSchema';
import { IpynbCreateNestedManyWithoutTopicsInputSchema } from './IpynbCreateNestedManyWithoutTopicsInputSchema';
import { QAPairCreateNestedManyWithoutTopicsInputSchema } from './QAPairCreateNestedManyWithoutTopicsInputSchema';
import { PracticeExamCreateNestedManyWithoutTopicsInputSchema } from './PracticeExamCreateNestedManyWithoutTopicsInputSchema';
import { ToDoCreateNestedManyWithoutTopicsInputSchema } from './ToDoCreateNestedManyWithoutTopicsInputSchema';
import { KanbanCreateNestedOneWithoutTopicsInputSchema } from './KanbanCreateNestedOneWithoutTopicsInputSchema';
import { BibEntryCreateNestedManyWithoutTopicsInputSchema } from './BibEntryCreateNestedManyWithoutTopicsInputSchema';
import { EquationCreateNestedManyWithoutTopicsInputSchema } from './EquationCreateNestedManyWithoutTopicsInputSchema';

export const TopicCreateWithoutTodoListInputSchema: z.ZodType<Prisma.TopicCreateWithoutTodoListInput> = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  MdxNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutTopicsInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbCreateNestedManyWithoutTopicsInputSchema).optional(),
  QAPair: z.lazy(() => QAPairCreateNestedManyWithoutTopicsInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamCreateNestedManyWithoutTopicsInputSchema).optional(),
  toDo: z.lazy(() => ToDoCreateNestedManyWithoutTopicsInputSchema).optional(),
  Kanban: z.lazy(() => KanbanCreateNestedOneWithoutTopicsInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryCreateNestedManyWithoutTopicsInputSchema).optional(),
  equations: z.lazy(() => EquationCreateNestedManyWithoutTopicsInputSchema).optional()
}).strict();

export default TopicCreateWithoutTodoListInputSchema;
