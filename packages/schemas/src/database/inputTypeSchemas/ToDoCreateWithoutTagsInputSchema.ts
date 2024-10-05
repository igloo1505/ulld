import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TaskCategorySchema } from './TaskCategorySchema';
import { MdxNoteCreateNestedManyWithoutToDoInputSchema } from './MdxNoteCreateNestedManyWithoutToDoInputSchema';
import { TopicCreateNestedManyWithoutToDoInputSchema } from './TopicCreateNestedManyWithoutToDoInputSchema';
import { SubjectCreateNestedManyWithoutToDoInputSchema } from './SubjectCreateNestedManyWithoutToDoInputSchema';
import { ToDoCreateNestedOneWithoutChildInputSchema } from './ToDoCreateNestedOneWithoutChildInputSchema';
import { ToDoCreateNestedManyWithoutParentInputSchema } from './ToDoCreateNestedManyWithoutParentInputSchema';
import { ToDoListCreateNestedOneWithoutTasksInputSchema } from './ToDoListCreateNestedOneWithoutTasksInputSchema';

export const ToDoCreateWithoutTagsInputSchema: z.ZodType<Prisma.ToDoCreateWithoutTagsInput> = z.object({
  createdAt: z.coerce.date().optional(),
  task: z.string(),
  dueAt: z.coerce.date().optional().nullable(),
  details: z.string().optional().nullable(),
  category: z.lazy(() => TaskCategorySchema).optional().nullable(),
  bookmarked: z.boolean().optional(),
  status: z.string().optional(),
  priority: z.number().int().optional(),
  completedOn: z.coerce.date().optional().nullable(),
  associatedNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutToDoInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutToDoInputSchema).optional(),
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutToDoInputSchema).optional(),
  parent: z.lazy(() => ToDoCreateNestedOneWithoutChildInputSchema).optional(),
  child: z.lazy(() => ToDoCreateNestedManyWithoutParentInputSchema).optional(),
  ToDoList: z.lazy(() => ToDoListCreateNestedOneWithoutTasksInputSchema).optional()
}).strict();

export default ToDoCreateWithoutTagsInputSchema;
