import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { KanBanListUncheckedCreateNestedManyWithoutKanbanInputSchema } from '../KanBanListUncheckedCreateNestedManyWithoutKanbanInputSchema.js';
import { SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema } from '../SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema.js';
import { TopicUncheckedCreateNestedManyWithoutKanbanInputSchema } from '../TopicUncheckedCreateNestedManyWithoutKanbanInputSchema.js';
export const KanbanUncheckedCreateWithoutTagsInputSchema: z.ZodType<Prisma.KanbanUncheckedCreateWithoutTagsInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  lists: z.lazy(() => KanBanListUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  subjects: z.lazy(() => SubjectUncheckedCreateNestedManyWithoutKanbanInputSchema).optional(),
  topics: z.lazy(() => TopicUncheckedCreateNestedManyWithoutKanbanInputSchema).optional()
}).strict();
export default KanbanUncheckedCreateWithoutTagsInputSchema;