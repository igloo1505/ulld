import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicCreateWithoutQAPairInputSchema } from './TopicCreateWithoutQAPairInputSchema';
import { TopicUncheckedCreateWithoutQAPairInputSchema } from './TopicUncheckedCreateWithoutQAPairInputSchema';
import { TopicCreateOrConnectWithoutQAPairInputSchema } from './TopicCreateOrConnectWithoutQAPairInputSchema';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';

export const TopicUncheckedCreateNestedManyWithoutQAPairInputSchema: z.ZodType<Prisma.TopicUncheckedCreateNestedManyWithoutQAPairInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutQAPairInputSchema),z.lazy(() => TopicCreateWithoutQAPairInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutQAPairInputSchema),z.lazy(() => TopicUncheckedCreateWithoutQAPairInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutQAPairInputSchema),z.lazy(() => TopicCreateOrConnectWithoutQAPairInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TopicUncheckedCreateNestedManyWithoutQAPairInputSchema;
