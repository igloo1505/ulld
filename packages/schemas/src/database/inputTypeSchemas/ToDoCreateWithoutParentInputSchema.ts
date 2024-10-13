import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TaskCategorySchema } from '../TaskCategorySchema.js';
import { MdxNoteCreateNestedManyWithoutToDoInputSchema } from '../MdxNoteCreateNestedManyWithoutToDoInputSchema.js';
import { TagCreateNestedManyWithoutToDoInputSchema } from '../TagCreateNestedManyWithoutToDoInputSchema.js';
import { TopicCreateNestedManyWithoutToDoInputSchema } from '../TopicCreateNestedManyWithoutToDoInputSchema.js';
import { SubjectCreateNestedManyWithoutToDoInputSchema } from '../SubjectCreateNestedManyWithoutToDoInputSchema.js';
import { ToDoCreateNestedManyWithoutParentInputSchema } from '../ToDoCreateNestedManyWithoutParentInputSchema.js';
import { ToDoListCreateNestedOneWithoutTasksInputSchema } from '../ToDoListCreateNestedOneWithoutTasksInputSchema.js';
export const ToDoCreateWithoutParentInputSchema: z.ZodType<Prisma.ToDoCreateWithoutParentInput> = z.object({
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
  subjects: z.lazy(() => SubjectCreateNestedManyWithoutToDoInputSchema).optional(),
  child: z.lazy(() => ToDoCreateNestedManyWithoutParentInputSchema).optional(),
  ToDoList: z.lazy(() => ToDoListCreateNestedOneWithoutTasksInputSchema).optional()
}).strict();
export default ToDoCreateWithoutParentInputSchema;