import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithoutKanbanInputSchema } from './TopicUpdateWithoutKanbanInputSchema';
import { TopicUncheckedUpdateWithoutKanbanInputSchema } from './TopicUncheckedUpdateWithoutKanbanInputSchema';
import { TopicCreateWithoutKanbanInputSchema } from './TopicCreateWithoutKanbanInputSchema';
import { TopicUncheckedCreateWithoutKanbanInputSchema } from './TopicUncheckedCreateWithoutKanbanInputSchema';

export const TopicUpsertWithWhereUniqueWithoutKanbanInputSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutKanbanInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TopicUpdateWithoutKanbanInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutKanbanInputSchema) ]),
  create: z.union([ z.lazy(() => TopicCreateWithoutKanbanInputSchema),z.lazy(() => TopicUncheckedCreateWithoutKanbanInputSchema) ]),
}).strict();

export default TopicUpsertWithWhereUniqueWithoutKanbanInputSchema;
