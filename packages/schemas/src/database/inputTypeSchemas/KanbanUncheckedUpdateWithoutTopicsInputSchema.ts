import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from '../IntFieldUpdateOperationsInputSchema.js';
import { StringFieldUpdateOperationsInputSchema } from '../StringFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from '../DateTimeFieldUpdateOperationsInputSchema.js';
import { KanBanListUncheckedUpdateManyWithoutKanbanNestedInputSchema } from '../KanBanListUncheckedUpdateManyWithoutKanbanNestedInputSchema.js';
import { TagUncheckedUpdateManyWithoutKanbanNestedInputSchema } from '../TagUncheckedUpdateManyWithoutKanbanNestedInputSchema.js';
import { SubjectUncheckedUpdateManyWithoutKanbanNestedInputSchema } from '../SubjectUncheckedUpdateManyWithoutKanbanNestedInputSchema.js';
export const KanbanUncheckedUpdateWithoutTopicsInputSchema: z.ZodType<Prisma.KanbanUncheckedUpdateWithoutTopicsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUpdate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lists: z.lazy(() => KanBanListUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional()
}).strict();
export default KanbanUncheckedUpdateWithoutTopicsInputSchema;