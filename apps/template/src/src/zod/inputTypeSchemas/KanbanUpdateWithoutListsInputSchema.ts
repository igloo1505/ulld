import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { TagUpdateManyWithoutKanbanNestedInputSchema } from './TagUpdateManyWithoutKanbanNestedInputSchema';
import { SubjectUpdateManyWithoutKanbanNestedInputSchema } from './SubjectUpdateManyWithoutKanbanNestedInputSchema';
import { TopicUpdateManyWithoutKanbanNestedInputSchema } from './TopicUpdateManyWithoutKanbanNestedInputSchema';

export const KanbanUpdateWithoutListsInputSchema: z.ZodType<Prisma.KanbanUpdateWithoutListsInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUpdate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tags: z.lazy(() => TagUpdateManyWithoutKanbanNestedInputSchema).optional(),
  subjects: z.lazy(() => SubjectUpdateManyWithoutKanbanNestedInputSchema).optional(),
  topics: z.lazy(() => TopicUpdateManyWithoutKanbanNestedInputSchema).optional()
}).strict();

export default KanbanUpdateWithoutListsInputSchema;
