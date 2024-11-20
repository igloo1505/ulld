import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteUncheckedCreateNestedManyWithoutTopicsInputSchema } from './MdxNoteUncheckedCreateNestedManyWithoutTopicsInputSchema';
import { IpynbUncheckedCreateNestedManyWithoutTopicsInputSchema } from './IpynbUncheckedCreateNestedManyWithoutTopicsInputSchema';
import { QAPairUncheckedCreateNestedManyWithoutTopicsInputSchema } from './QAPairUncheckedCreateNestedManyWithoutTopicsInputSchema';
import { PracticeExamUncheckedCreateNestedManyWithoutTopicsInputSchema } from './PracticeExamUncheckedCreateNestedManyWithoutTopicsInputSchema';
import { ToDoUncheckedCreateNestedManyWithoutTopicsInputSchema } from './ToDoUncheckedCreateNestedManyWithoutTopicsInputSchema';
import { BibEntryUncheckedCreateNestedManyWithoutTopicsInputSchema } from './BibEntryUncheckedCreateNestedManyWithoutTopicsInputSchema';
import { EquationUncheckedCreateNestedManyWithoutTopicsInputSchema } from './EquationUncheckedCreateNestedManyWithoutTopicsInputSchema';

export const TopicUncheckedCreateWithoutTodoListInputSchema: z.ZodType<Prisma.TopicUncheckedCreateWithoutTodoListInput> = z.object({
  value: z.string(),
  kanbanId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  MdxNotes: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  QAPair: z.lazy(() => QAPairUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedCreateNestedManyWithoutTopicsInputSchema).optional()
}).strict();

export default TopicUncheckedCreateWithoutTodoListInputSchema;
