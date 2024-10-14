import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithoutToDoInputSchema } from './TopicUpdateWithoutToDoInputSchema.js';
import { TopicUncheckedUpdateWithoutToDoInputSchema } from './TopicUncheckedUpdateWithoutToDoInputSchema.js';
export const TopicUpdateWithWhereUniqueWithoutToDoInputSchema: z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutToDoInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateWithoutToDoInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutToDoInputSchema) ]),
}).strict();
export default TopicUpdateWithWhereUniqueWithoutToDoInputSchema;