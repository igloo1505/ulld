import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { TaskCategorySchema } from './TaskCategorySchema';
import { NullableEnumTaskCategoryFieldUpdateOperationsInputSchema } from './NullableEnumTaskCategoryFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { MdxNoteUpdateManyWithoutToDoNestedInputSchema } from './MdxNoteUpdateManyWithoutToDoNestedInputSchema';
import { TopicUpdateManyWithoutToDoNestedInputSchema } from './TopicUpdateManyWithoutToDoNestedInputSchema';
import { SubjectUpdateManyWithoutToDoNestedInputSchema } from './SubjectUpdateManyWithoutToDoNestedInputSchema';
import { ToDoUpdateOneWithoutChildNestedInputSchema } from './ToDoUpdateOneWithoutChildNestedInputSchema';
import { ToDoUpdateManyWithoutParentNestedInputSchema } from './ToDoUpdateManyWithoutParentNestedInputSchema';
import { ToDoListUpdateOneWithoutTasksNestedInputSchema } from './ToDoListUpdateOneWithoutTasksNestedInputSchema';

export const ToDoUpdateWithoutTagsInputSchema: z.ZodType<Prisma.ToDoUpdateWithoutTagsInput> = z.object({
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
  topics: z.lazy(() => TopicUpdateManyWithoutToDoNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUpdateManyWithoutToDoNestedInputSchema).optional(),
  parent: z.lazy(() => ToDoUpdateOneWithoutChildNestedInputSchema).optional(),
  child: z.lazy(() => ToDoUpdateManyWithoutParentNestedInputSchema).optional(),
  ToDoList: z.lazy(() => ToDoListUpdateOneWithoutTasksNestedInputSchema).optional()
}).strict();

export default ToDoUpdateWithoutTagsInputSchema;
