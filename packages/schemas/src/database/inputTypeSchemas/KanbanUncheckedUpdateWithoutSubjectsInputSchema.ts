import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { KanBanListUncheckedUpdateManyWithoutKanbanNestedInputSchema } from './KanBanListUncheckedUpdateManyWithoutKanbanNestedInputSchema';
import { TagUncheckedUpdateManyWithoutKanbanNestedInputSchema } from './TagUncheckedUpdateManyWithoutKanbanNestedInputSchema';
import { TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema } from './TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema';

export const KanbanUncheckedUpdateWithoutSubjectsInputSchema: z.ZodType<Prisma.KanbanUncheckedUpdateWithoutSubjectsInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUpdate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lists: z.lazy(() => KanBanListUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional(),
  tags: z.lazy(() => TagUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedUpdateManyWithoutKanbanNestedInputSchema).optional()
}).strict();

export default KanbanUncheckedUpdateWithoutSubjectsInputSchema;
