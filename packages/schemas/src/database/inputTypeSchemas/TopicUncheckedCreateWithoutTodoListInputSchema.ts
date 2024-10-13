import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteUncheckedCreateNestedManyWithoutTopicsInputSchema } from '../MdxNoteUncheckedCreateNestedManyWithoutTopicsInputSchema.js';
import { IpynbUncheckedCreateNestedManyWithoutTopicsInputSchema } from '../IpynbUncheckedCreateNestedManyWithoutTopicsInputSchema.js';
import { QAPairUncheckedCreateNestedManyWithoutTopicsInputSchema } from '../QAPairUncheckedCreateNestedManyWithoutTopicsInputSchema.js';
import { PracticeExamUncheckedCreateNestedManyWithoutTopicsInputSchema } from '../PracticeExamUncheckedCreateNestedManyWithoutTopicsInputSchema.js';
import { ToDoUncheckedCreateNestedManyWithoutTopicsInputSchema } from '../ToDoUncheckedCreateNestedManyWithoutTopicsInputSchema.js';
import { BibEntryUncheckedCreateNestedManyWithoutTopicsInputSchema } from '../BibEntryUncheckedCreateNestedManyWithoutTopicsInputSchema.js';
import { EquationUncheckedCreateNestedManyWithoutTopicsInputSchema } from '../EquationUncheckedCreateNestedManyWithoutTopicsInputSchema.js';
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