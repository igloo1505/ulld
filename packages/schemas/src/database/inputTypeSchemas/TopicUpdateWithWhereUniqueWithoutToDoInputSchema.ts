import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithoutToDoInputSchema } from './TopicUpdateWithoutToDoInputSchema';
import { TopicUncheckedUpdateWithoutToDoInputSchema } from './TopicUncheckedUpdateWithoutToDoInputSchema';

export const TopicUpdateWithWhereUniqueWithoutToDoInputSchema: z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutToDoInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateWithoutToDoInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutToDoInputSchema) ]),
}).strict();

export default TopicUpdateWithWhereUniqueWithoutToDoInputSchema;
