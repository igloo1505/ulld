import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { KanBanListUpdateManyWithoutKanbanNestedInputSchema } from './KanBanListUpdateManyWithoutKanbanNestedInputSchema.js';
import { TagUpdateManyWithoutKanbanNestedInputSchema } from './TagUpdateManyWithoutKanbanNestedInputSchema.js';
import { SubjectUpdateManyWithoutKanbanNestedInputSchema } from './SubjectUpdateManyWithoutKanbanNestedInputSchema.js';
import { TopicUpdateManyWithoutKanbanNestedInputSchema } from './TopicUpdateManyWithoutKanbanNestedInputSchema.js';
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