import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithoutKanbanInputSchema } from './TopicUpdateWithoutKanbanInputSchema';
import { TopicUncheckedUpdateWithoutKanbanInputSchema } from './TopicUncheckedUpdateWithoutKanbanInputSchema';

export const TopicUpdateWithWhereUniqueWithoutKanbanInputSchema: z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutKanbanInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateWithoutKanbanInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutKanbanInputSchema) ]),
}).strict();

export default TopicUpdateWithWhereUniqueWithoutKanbanInputSchema;
