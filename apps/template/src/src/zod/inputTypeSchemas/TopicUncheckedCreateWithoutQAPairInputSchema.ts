import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteUncheckedCreateNestedManyWithoutTopicsInputSchema } from './MdxNoteUncheckedCreateNestedManyWithoutTopicsInputSchema';
import { IpynbUncheckedCreateNestedManyWithoutTopicsInputSchema } from './IpynbUncheckedCreateNestedManyWithoutTopicsInputSchema';
import { PracticeExamUncheckedCreateNestedManyWithoutTopicsInputSchema } from './PracticeExamUncheckedCreateNestedManyWithoutTopicsInputSchema';
import { ToDoUncheckedCreateNestedManyWithoutTopicsInputSchema } from './ToDoUncheckedCreateNestedManyWithoutTopicsInputSchema';
import { ToDoListUncheckedCreateNestedManyWithoutTopicsInputSchema } from './ToDoListUncheckedCreateNestedManyWithoutTopicsInputSchema';
import { BibEntryUncheckedCreateNestedManyWithoutTopicsInputSchema } from './BibEntryUncheckedCreateNestedManyWithoutTopicsInputSchema';
import { EquationUncheckedCreateNestedManyWithoutTopicsInputSchema } from './EquationUncheckedCreateNestedManyWithoutTopicsInputSchema';

export const TopicUncheckedCreateWithoutQAPairInputSchema: z.ZodType<Prisma.TopicUncheckedCreateWithoutQAPairInput> = z.object({
  value: z.string(),
  kanbanId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  MdxNotes: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedCreateNestedManyWithoutTopicsInputSchema).optional()
}).strict();

export default TopicUncheckedCreateWithoutQAPairInputSchema;
