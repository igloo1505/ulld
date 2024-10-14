import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicCreateWithoutKanbanInputSchema } from './TopicCreateWithoutKanbanInputSchema';
import { TopicUncheckedCreateWithoutKanbanInputSchema } from './TopicUncheckedCreateWithoutKanbanInputSchema';

export const TopicCreateOrConnectWithoutKanbanInputSchema: z.ZodType<Prisma.TopicCreateOrConnectWithoutKanbanInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TopicCreateWithoutKanbanInputSchema),z.lazy(() => TopicUncheckedCreateWithoutKanbanInputSchema) ]),
}).strict();

export default TopicCreateOrConnectWithoutKanbanInputSchema;
