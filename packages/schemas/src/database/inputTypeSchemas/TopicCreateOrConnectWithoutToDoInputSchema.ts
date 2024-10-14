import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicCreateWithoutToDoInputSchema } from './TopicCreateWithoutToDoInputSchema.js';
import { TopicUncheckedCreateWithoutToDoInputSchema } from './TopicUncheckedCreateWithoutToDoInputSchema.js';
export const TopicCreateOrConnectWithoutToDoInputSchema: z.ZodType<Prisma.TopicCreateOrConnectWithoutToDoInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TopicCreateWithoutToDoInputSchema),z.lazy(() => TopicUncheckedCreateWithoutToDoInputSchema) ]),
}).strict();
export default TopicCreateOrConnectWithoutToDoInputSchema;