import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryUncheckedCreateNestedManyWithoutTagsInputSchema } from './BibEntryUncheckedCreateNestedManyWithoutTagsInputSchema.js';
import { IpynbUncheckedCreateNestedManyWithoutTagsInputSchema } from './IpynbUncheckedCreateNestedManyWithoutTagsInputSchema.js';
import { QAPairUncheckedCreateNestedManyWithoutTagsInputSchema } from './QAPairUncheckedCreateNestedManyWithoutTagsInputSchema.js';
import { PracticeExamUncheckedCreateNestedManyWithoutTagsInputSchema } from './PracticeExamUncheckedCreateNestedManyWithoutTagsInputSchema.js';
import { EquationUncheckedCreateNestedManyWithoutTagsInputSchema } from './EquationUncheckedCreateNestedManyWithoutTagsInputSchema.js';
import { ToDoUncheckedCreateNestedManyWithoutTagsInputSchema } from './ToDoUncheckedCreateNestedManyWithoutTagsInputSchema.js';
import { ToDoListUncheckedCreateNestedManyWithoutTagsInputSchema } from './ToDoListUncheckedCreateNestedManyWithoutTagsInputSchema.js';
export const TagUncheckedCreateWithoutMdxNotesInputSchema: z.ZodType<Prisma.TagUncheckedCreateWithoutMdxNotesInput> = z.object({
  value: z.string(),
  kanbanId: z.number().int().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  QAPair: z.lazy(() => QAPairUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  equations: z.lazy(() => EquationUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  toDo: z.lazy(() => ToDoUncheckedCreateNestedManyWithoutTagsInputSchema).optional(),
  todoList: z.lazy(() => ToDoListUncheckedCreateNestedManyWithoutTagsInputSchema).optional()
}).strict();
export default TagUncheckedCreateWithoutMdxNotesInputSchema;