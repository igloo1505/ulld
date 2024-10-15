import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema.js';
import { TaskCategorySchema } from './TaskCategorySchema.js';
import { NullableEnumTaskCategoryFieldUpdateOperationsInputSchema } from './NullableEnumTaskCategoryFieldUpdateOperationsInputSchema.js';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema.js';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema.js';
import { MdxNoteUpdateManyWithoutToDoNestedInputSchema } from './MdxNoteUpdateManyWithoutToDoNestedInputSchema.js';
import { TagUpdateManyWithoutToDoNestedInputSchema } from './TagUpdateManyWithoutToDoNestedInputSchema.js';
import { TopicUpdateManyWithoutToDoNestedInputSchema } from './TopicUpdateManyWithoutToDoNestedInputSchema.js';
import { SubjectUpdateManyWithoutToDoNestedInputSchema } from './SubjectUpdateManyWithoutToDoNestedInputSchema.js';
import { ToDoUpdateOneWithoutChildNestedInputSchema } from './ToDoUpdateOneWithoutChildNestedInputSchema.js';
import { ToDoUpdateManyWithoutParentNestedInputSchema } from './ToDoUpdateManyWithoutParentNestedInputSchema.js';
import { ToDoListUpdateOneWithoutTasksNestedInputSchema } from './ToDoListUpdateOneWithoutTasksNestedInputSchema.js';
export const ToDoUpdateInputSchema: z.ZodType<Prisma.ToDoUpdateInput> = z.object({
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  task: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dueAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  details: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category: z.union([ z.lazy(() => TaskCategorySchema),z.lazy(() => NullableEnumTaskCategoryFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bookmarked: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  priority: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  completedOn: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  associatedNotes: z.lazy(() => MdxNoteUpdateManyWithoutToDoNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutToDoNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutToDoNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUpdateManyWithoutToDoNestedInputSchema).optional(),
  parent: z.lazy(() => ToDoUpdateOneWithoutChildNestedInputSchema).optional(),
  child: z.lazy(() => ToDoUpdateManyWithoutParentNestedInputSchema).optional(),
  ToDoList: z.lazy(() => ToDoListUpdateOneWithoutTasksNestedInputSchema).optional()
}).strict();
export default ToDoUpdateInputSchema;