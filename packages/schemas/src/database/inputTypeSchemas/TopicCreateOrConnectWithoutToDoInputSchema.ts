import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicCreateWithoutToDoInputSchema } from './TopicCreateWithoutToDoInputSchema';
import { TopicUncheckedCreateWithoutToDoInputSchema } from './TopicUncheckedCreateWithoutToDoInputSchema';

export const TopicCreateOrConnectWithoutToDoInputSchema: z.ZodType<Prisma.TopicCreateOrConnectWithoutToDoInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TopicCreateWithoutToDoInputSchema),z.lazy(() => TopicUncheckedCreateWithoutToDoInputSchema) ]),
}).strict();

export default TopicCreateOrConnectWithoutToDoInputSchema;
