import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema.js';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema.js';
import { TaskCategorySchema } from './TaskCategorySchema.js';
import { NullableEnumTaskCategoryFieldUpdateOperationsInputSchema } from './NullableEnumTaskCategoryFieldUpdateOperationsInputSchema.js';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema.js';
import { MdxNoteUncheckedUpdateManyWithoutToDoNestedInputSchema } from './MdxNoteUncheckedUpdateManyWithoutToDoNestedInputSchema.js';
import { TopicUncheckedUpdateManyWithoutToDoNestedInputSchema } from './TopicUncheckedUpdateManyWithoutToDoNestedInputSchema.js';
import { SubjectUncheckedUpdateManyWithoutToDoNestedInputSchema } from './SubjectUncheckedUpdateManyWithoutToDoNestedInputSchema.js';
import { ToDoUncheckedUpdateManyWithoutParentNestedInputSchema } from './ToDoUncheckedUpdateManyWithoutParentNestedInputSchema.js';
export const ToDoUncheckedUpdateWithoutTagsInputSchema: z.ZodType<Prisma.ToDoUncheckedUpdateWithoutTagsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  task: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dueAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  details: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  parentId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  category: z.union([ z.lazy(() => TaskCategorySchema),z.lazy(() => NullableEnumTaskCategoryFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bookmarked: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  priority: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  toDoListId: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  completedOn: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  associatedNotes: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutToDoNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutToDoNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutToDoNestedInputSchema).optional(),
  child: z.lazy(() => ToDoUncheckedUpdateManyWithoutParentNestedInputSchema).optional()
}).strict();
export default ToDoUncheckedUpdateWithoutTagsInputSchema;