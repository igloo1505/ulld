import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TagUncheckedUpdateManyWithoutKanbanNestedInputSchema } from './TagUncheckedUpdateManyWithoutKanbanNestedInputSchema';
import { SubjectUncheckedUpdateManyWithoutKanbanNestedInputSchema } from './SubjectUncheckedUpdateManyWithoutKanbanNestedInputSchema';
import { TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema } from './TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema';

export const KanbanUncheckedUpdateWithoutListsInputSchema: z.ZodType<Prisma.KanbanUncheckedUpdateWithoutListsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUpdate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional()
}).strict();

export default KanbanUncheckedUpdateWithoutListsInputSchema;
