import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from '../IntFieldUpdateOperationsInputSchema.js';
import { StringFieldUpdateOperationsInputSchema } from '../StringFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from '../DateTimeFieldUpdateOperationsInputSchema.js';
import { TagUncheckedUpdateManyWithoutKanbanNestedInputSchema } from '../TagUncheckedUpdateManyWithoutKanbanNestedInputSchema.js';
import { SubjectUncheckedUpdateManyWithoutKanbanNestedInputSchema } from '../SubjectUncheckedUpdateManyWithoutKanbanNestedInputSchema.js';
import { TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema } from '../TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema.js';
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