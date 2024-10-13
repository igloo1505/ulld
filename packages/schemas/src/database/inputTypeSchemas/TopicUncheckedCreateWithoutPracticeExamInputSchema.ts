import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteUncheckedCreateNestedManyWithoutTopicsInputSchema } from '../MdxNoteUncheckedCreateNestedManyWithoutTopicsInputSchema.js';
import { IpynbUncheckedCreateNestedManyWithoutTopicsInputSchema } from '../IpynbUncheckedCreateNestedManyWithoutTopicsInputSchema.js';
import { QAPairUncheckedCreateNestedManyWithoutTopicsInputSchema } from '../QAPairUncheckedCreateNestedManyWithoutTopicsInputSchema.js';
import { ToDoUncheckedCreateNestedManyWithoutTopicsInputSchema } from '../ToDoUncheckedCreateNestedManyWithoutTopicsInputSchema.js';
import { ToDoListUncheckedCreateNestedManyWithoutTopicsInputSchema } from '../ToDoListUncheckedCreateNestedManyWithoutTopicsInputSchema.js';
import { BibEntryUncheckedCreateNestedManyWithoutTopicsInputSchema } from '../BibEntryUncheckedCreateNestedManyWithoutTopicsInputSchema.js';
import { EquationUncheckedCreateNestedManyWithoutTopicsInputSchema } from '../EquationUncheckedCreateNestedManyWithoutTopicsInputSchema.js';
export const TopicUncheckedCreateWithoutPracticeExamInputSchema: z.ZodType<Prisma.TopicUncheckedCreateWithoutPracticeExamInput> = z.object({
  value: z.string(),
  kanbanId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  MdxNotes: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  QAPair: z.lazy(() => QAPairUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutTopicsInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedCreateNestedManyWithoutTopicsInputSchema).optional()
}).strict();
export default TopicUncheckedCreateWithoutPracticeExamInputSchema;