import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicCreateWithoutToDoInputSchema } from './TopicCreateWithoutToDoInputSchema.js';
import { TopicUncheckedCreateWithoutToDoInputSchema } from './TopicUncheckedCreateWithoutToDoInputSchema.js';
import { TopicCreateOrConnectWithoutToDoInputSchema } from './TopicCreateOrConnectWithoutToDoInputSchema.js';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
export const TopicCreateNestedManyWithoutToDoInputSchema: z.ZodType<Prisma.TopicCreateNestedManyWithoutToDoInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutToDoInputSchema),z.lazy(() => TopicCreateWithoutToDoInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutToDoInputSchema),z.lazy(() => TopicUncheckedCreateWithoutToDoInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutToDoInputSchema),z.lazy(() => TopicCreateOrConnectWithoutToDoInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default TopicCreateNestedManyWithoutToDoInputSchema;