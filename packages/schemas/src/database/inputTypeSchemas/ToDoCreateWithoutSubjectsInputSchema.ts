import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TaskCategorySchema } from './TaskCategorySchema.js';
import { MdxNoteCreateNestedManyWithoutToDoInputSchema } from './MdxNoteCreateNestedManyWithoutToDoInputSchema.js';
import { TagCreateNestedManyWithoutToDoInputSchema } from './TagCreateNestedManyWithoutToDoInputSchema.js';
import { TopicCreateNestedManyWithoutToDoInputSchema } from './TopicCreateNestedManyWithoutToDoInputSchema.js';
import { ToDoCreateNestedOneWithoutChildInputSchema } from './ToDoCreateNestedOneWithoutChildInputSchema.js';
import { ToDoCreateNestedManyWithoutParentInputSchema } from './ToDoCreateNestedManyWithoutParentInputSchema.js';
import { ToDoListCreateNestedOneWithoutTasksInputSchema } from './ToDoListCreateNestedOneWithoutTasksInputSchema.js';
export const ToDoCreateWithoutSubjectsInputSchema: z.ZodType<Prisma.ToDoCreateWithoutSubjectsInput> = z.object({
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
  tags: z.lazy(() => TagCreateNestedManyWithoutToDoInputSchema).optional(),
  topics: z.lazy(() => TopicCreateNestedManyWithoutToDoInputSchema).optional(),
  parent: z.lazy(() => ToDoCreateNestedOneWithoutChildInputSchema).optional(),
  child: z.lazy(() => ToDoCreateNestedManyWithoutParentInputSchema).optional(),
  ToDoList: z.lazy(() => ToDoListCreateNestedOneWithoutTasksInputSchema).optional()
}).strict();
export default ToDoCreateWithoutSubjectsInputSchema;