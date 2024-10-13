import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from '../TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithoutToDoInputSchema } from '../TopicUpdateWithoutToDoInputSchema.js';
import { TopicUncheckedUpdateWithoutToDoInputSchema } from '../TopicUncheckedUpdateWithoutToDoInputSchema.js';
import { TopicCreateWithoutToDoInputSchema } from '../TopicCreateWithoutToDoInputSchema.js';
import { TopicUncheckedCreateWithoutToDoInputSchema } from '../TopicUncheckedCreateWithoutToDoInputSchema.js';
export const TopicUpsertWithWhereUniqueWithoutToDoInputSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutToDoInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TopicUpdateWithoutToDoInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutToDoInputSchema) ]),
  create: z.union([ z.lazy(() => TopicCreateWithoutToDoInputSchema),z.lazy(() => TopicUncheckedCreateWithoutToDoInputSchema) ]),
}).strict();
export default TopicUpsertWithWhereUniqueWithoutToDoInputSchema;