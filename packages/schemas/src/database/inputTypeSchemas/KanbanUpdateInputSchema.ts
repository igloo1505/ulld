import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { KanBanListUpdateManyWithoutKanbanNestedInputSchema } from './KanBanListUpdateManyWithoutKanbanNestedInputSchema';
import { TagUpdateManyWithoutKanbanNestedInputSchema } from './TagUpdateManyWithoutKanbanNestedInputSchema';
import { SubjectUpdateManyWithoutKanbanNestedInputSchema } from './SubjectUpdateManyWithoutKanbanNestedInputSchema';
import { TopicUpdateManyWithoutKanbanNestedInputSchema } from './TopicUpdateManyWithoutKanbanNestedInputSchema';

export const KanbanUpdateInputSchema: z.ZodType<Prisma.KanbanUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUpdate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lists: z.lazy(() => KanBanListUpdateManyWithoutKanbanNestedInputSchema).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutKanbanNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUpdateManyWithoutKanbanNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutKanbanNestedInputSchema).optional()
}).strict();

export default KanbanUpdateInputSchema;
