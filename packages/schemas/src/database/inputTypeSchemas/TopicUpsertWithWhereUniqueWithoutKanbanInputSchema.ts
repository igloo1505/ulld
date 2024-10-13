import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from '../TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithoutKanbanInputSchema } from '../TopicUpdateWithoutKanbanInputSchema.js';
import { TopicUncheckedUpdateWithoutKanbanInputSchema } from '../TopicUncheckedUpdateWithoutKanbanInputSchema.js';
import { TopicCreateWithoutKanbanInputSchema } from '../TopicCreateWithoutKanbanInputSchema.js';
import { TopicUncheckedCreateWithoutKanbanInputSchema } from '../TopicUncheckedCreateWithoutKanbanInputSchema.js';
export const TopicUpsertWithWhereUniqueWithoutKanbanInputSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutKanbanInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TopicUpdateWithoutKanbanInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutKanbanInputSchema) ]),
  create: z.union([ z.lazy(() => TopicCreateWithoutKanbanInputSchema),z.lazy(() => TopicUncheckedCreateWithoutKanbanInputSchema) ]),
}).strict();
export default TopicUpsertWithWhereUniqueWithoutKanbanInputSchema;