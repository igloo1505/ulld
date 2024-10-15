import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicCreateWithoutEquationsInputSchema } from './TopicCreateWithoutEquationsInputSchema.js';
import { TopicUncheckedCreateWithoutEquationsInputSchema } from './TopicUncheckedCreateWithoutEquationsInputSchema.js';
export const TopicCreateOrConnectWithoutEquationsInputSchema: z.ZodType<Prisma.TopicCreateOrConnectWithoutEquationsInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TopicCreateWithoutEquationsInputSchema),z.lazy(() => TopicUncheckedCreateWithoutEquationsInputSchema) ]),
}).strict();
export default TopicCreateOrConnectWithoutEquationsInputSchema;