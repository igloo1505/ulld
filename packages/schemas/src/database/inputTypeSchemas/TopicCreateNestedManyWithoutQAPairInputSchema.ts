import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicCreateWithoutQAPairInputSchema } from './TopicCreateWithoutQAPairInputSchema.js';
import { TopicUncheckedCreateWithoutQAPairInputSchema } from './TopicUncheckedCreateWithoutQAPairInputSchema.js';
import { TopicCreateOrConnectWithoutQAPairInputSchema } from './TopicCreateOrConnectWithoutQAPairInputSchema.js';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
export const TopicCreateNestedManyWithoutQAPairInputSchema: z.ZodType<Prisma.TopicCreateNestedManyWithoutQAPairInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutQAPairInputSchema),z.lazy(() => TopicCreateWithoutQAPairInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutQAPairInputSchema),z.lazy(() => TopicUncheckedCreateWithoutQAPairInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutQAPairInputSchema),z.lazy(() => TopicCreateOrConnectWithoutQAPairInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default TopicCreateNestedManyWithoutQAPairInputSchema;