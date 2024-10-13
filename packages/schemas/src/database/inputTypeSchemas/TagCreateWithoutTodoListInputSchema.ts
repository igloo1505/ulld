import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteCreateNestedManyWithoutTagsInputSchema } from '../MdxNoteCreateNestedManyWithoutTagsInputSchema.js';
import { BibEntryCreateNestedManyWithoutTagsInputSchema } from '../BibEntryCreateNestedManyWithoutTagsInputSchema.js';
import { IpynbCreateNestedManyWithoutTagsInputSchema } from '../IpynbCreateNestedManyWithoutTagsInputSchema.js';
import { QAPairCreateNestedManyWithoutTagsInputSchema } from '../QAPairCreateNestedManyWithoutTagsInputSchema.js';
import { PracticeExamCreateNestedManyWithoutTagsInputSchema } from '../PracticeExamCreateNestedManyWithoutTagsInputSchema.js';
import { EquationCreateNestedManyWithoutTagsInputSchema } from '../EquationCreateNestedManyWithoutTagsInputSchema.js';
import { ToDoCreateNestedManyWithoutTagsInputSchema } from '../ToDoCreateNestedManyWithoutTagsInputSchema.js';
import { KanbanCreateNestedOneWithoutTagsInputSchema } from '../KanbanCreateNestedOneWithoutTagsInputSchema.js';
export const TagCreateWithoutTodoListInputSchema: z.ZodType<Prisma.TagCreateWithoutTodoListInput> = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  MdxNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutTagsInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryCreateNestedManyWithoutTagsInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbCreateNestedManyWithoutTagsInputSchema).optional(),
  QAPair: z.lazy(() => QAPairCreateNestedManyWithoutTagsInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamCreateNestedManyWithoutTagsInputSchema).optional(),
  equations: z.lazy(() => EquationCreateNestedManyWithoutTagsInputSchema).optional(),
  toDo: z.lazy(() => ToDoCreateNestedManyWithoutTagsInputSchema).optional(),
  Kanban: z.lazy(() => KanbanCreateNestedOneWithoutTagsInputSchema).optional()
}).strict();
export default TagCreateWithoutTodoListInputSchema;