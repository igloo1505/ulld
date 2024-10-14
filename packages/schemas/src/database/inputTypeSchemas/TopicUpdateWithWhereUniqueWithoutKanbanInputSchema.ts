import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithoutKanbanInputSchema } from './TopicUpdateWithoutKanbanInputSchema.js';
import { TopicUncheckedUpdateWithoutKanbanInputSchema } from './TopicUncheckedUpdateWithoutKanbanInputSchema.js';
export const TopicUpdateWithWhereUniqueWithoutKanbanInputSchema: z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutKanbanInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateWithoutKanbanInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutKanbanInputSchema) ]),
}).strict();
export default TopicUpdateWithWhereUniqueWithoutKanbanInputSchema;