import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TaskCategorySchema } from './TaskCategorySchema';
import { MdxNoteUncheckedCreateNestedManyWithoutToDoInputSchema } from './MdxNoteUncheckedCreateNestedManyWithoutToDoInputSchema';
import { TagUncheckedCreateNestedManyWithoutToDoInputSchema } from './TagUncheckedCreateNestedManyWithoutToDoInputSchema';
import { TopicUncheckedCreateNestedManyWithoutToDoInputSchema } from './TopicUncheckedCreateNestedManyWithoutToDoInputSchema';
import { SubjectUncheckedCreateNestedManyWithoutToDoInputSchema } from './SubjectUncheckedCreateNestedManyWithoutToDoInputSchema';
import { ToDoUncheckedCreateNestedManyWithoutParentInputSchema } from './ToDoUncheckedCreateNestedManyWithoutParentInputSchema';

export const ToDoUncheckedCreateWithoutParentInputSchema: z.ZodType<Prisma.ToDoUncheckedCreateWithoutParentInput> = z.object({
  id: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  task: z.string(),
  dueAt: z.coerce.date().optional().nullable(),
  details: z.string().optional().nullable(),
  category: z.lazy(() => TaskCategorySchema).optional().nullable(),
  bookmarked: z.boolean().optional(),
  status: z.string().optional(),
  priority: z.number().int().optional(),
  toDoListId: z.number().int().optional().nullable(),
  completedOn: z.coerce.date().optional().nullable(),
  associatedNotes: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutToDoInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedCreateNestedManyWithoutToDoInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutToDoInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutToDoInputSchema).optional(),
  child: z.lazy(() => ToDoUncheckedCreateNestedManyWithoutParentInputSchema).optional()
}).strict();

export default ToDoUncheckedCreateWithoutParentInputSchema;
