import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema.js';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { KanBanListUncheckedUpdateManyWithoutKanbanNestedInputSchema } from './KanBanListUncheckedUpdateManyWithoutKanbanNestedInputSchema.js';
import { SubjectUncheckedUpdateManyWithoutKanbanNestedInputSchema } from './SubjectUncheckedUpdateManyWithoutKanbanNestedInputSchema.js';
import { TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema } from './TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema.js';
export const KanbanUncheckedUpdateWithoutTagsInputSchema: z.ZodType<Prisma.KanbanUncheckedUpdateWithoutTagsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUpdate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lists: z.lazy(() => KanBanListUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional()
}).strict();
export default KanbanUncheckedUpdateWithoutTagsInputSchema;