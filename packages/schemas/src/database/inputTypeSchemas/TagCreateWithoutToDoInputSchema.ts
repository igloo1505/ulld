import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateNestedManyWithoutTagsInputSchema } from './MdxNoteCreateNestedManyWithoutTagsInputSchema';
import { BibEntryCreateNestedManyWithoutTagsInputSchema } from './BibEntryCreateNestedManyWithoutTagsInputSchema';
import { IpynbCreateNestedManyWithoutTagsInputSchema } from './IpynbCreateNestedManyWithoutTagsInputSchema';
import { QAPairCreateNestedManyWithoutTagsInputSchema } from './QAPairCreateNestedManyWithoutTagsInputSchema';
import { PracticeExamCreateNestedManyWithoutTagsInputSchema } from './PracticeExamCreateNestedManyWithoutTagsInputSchema';
import { EquationCreateNestedManyWithoutTagsInputSchema } from './EquationCreateNestedManyWithoutTagsInputSchema';
import { KanbanCreateNestedOneWithoutTagsInputSchema } from './KanbanCreateNestedOneWithoutTagsInputSchema';
import { ToDoListCreateNestedManyWithoutTagsInputSchema } from './ToDoListCreateNestedManyWithoutTagsInputSchema';

export const TagCreateWithoutToDoInputSchema: z.ZodType<Prisma.TagCreateWithoutToDoInput> = z.object({
  value: z.string(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional(),
  MdxNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutTagsInputSchema).optional(),
  bibEntries: z.lazy(() => BibEntryCreateNestedManyWithoutTagsInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbCreateNestedManyWithoutTagsInputSchema).optional(),
  QAPair: z.lazy(() => QAPairCreateNestedManyWithoutTagsInputSchema).optional(),
  practiceExam: z.lazy(() => PracticeExamCreateNestedManyWithoutTagsInputSchema).optional(),
  equations: z.lazy(() => EquationCreateNestedManyWithoutTagsInputSchema).optional(),
  Kanban: z.lazy(() => KanbanCreateNestedOneWithoutTagsInputSchema).optional(),
  todoList: z.lazy(() => ToDoListCreateNestedManyWithoutTagsInputSchema).optional()
}).strict();

export default TagCreateWithoutToDoInputSchema;
