import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithoutToDoInputSchema } from './TopicUpdateWithoutToDoInputSchema';
import { TopicUncheckedUpdateWithoutToDoInputSchema } from './TopicUncheckedUpdateWithoutToDoInputSchema';
import { TopicCreateWithoutToDoInputSchema } from './TopicCreateWithoutToDoInputSchema';
import { TopicUncheckedCreateWithoutToDoInputSchema } from './TopicUncheckedCreateWithoutToDoInputSchema';

export const TopicUpsertWithWhereUniqueWithoutToDoInputSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutToDoInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TopicUpdateWithoutToDoInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutToDoInputSchema) ]),
  create: z.union([ z.lazy(() => TopicCreateWithoutToDoInputSchema),z.lazy(() => TopicUncheckedCreateWithoutToDoInputSchema) ]),
}).strict();

export default TopicUpsertWithWhereUniqueWithoutToDoInputSchema;
