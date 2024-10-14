import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { TaskCategorySchema } from './TaskCategorySchema';
import { NullableEnumTaskCategoryFieldUpdateOperationsInputSchema } from './NullableEnumTaskCategoryFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { MdxNoteUncheckedUpdateManyWithoutToDoNestedInputSchema } from './MdxNoteUncheckedUpdateManyWithoutToDoNestedInputSchema';
import { TagUncheckedUpdateManyWithoutToDoNestedInputSchema } from './TagUncheckedUpdateManyWithoutToDoNestedInputSchema';
import { TopicUncheckedUpdateManyWithoutToDoNestedInputSchema } from './TopicUncheckedUpdateManyWithoutToDoNestedInputSchema';
import { SubjectUncheckedUpdateManyWithoutToDoNestedInputSchema } from './SubjectUncheckedUpdateManyWithoutToDoNestedInputSchema';
import { ToDoUncheckedUpdateManyWithoutParentNestedInputSchema } from './ToDoUncheckedUpdateManyWithoutParentNestedInputSchema';

export const ToDoUncheckedUpdateWithoutToDoListInputSchema: z.ZodType<Prisma.ToDoUncheckedUpdateWithoutToDoListInput> = z.object({
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
  completedOn: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  associatedNotes: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutToDoNestedInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutToDoNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutToDoNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutToDoNestedInputSchema).optional(),
  child: z.lazy(() => ToDoUncheckedUpdateManyWithoutParentNestedInputSchema).optional()
}).strict();

export default ToDoUncheckedUpdateWithoutToDoListInputSchema;
