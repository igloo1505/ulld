import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicCreateWithoutEquationsInputSchema } from './TopicCreateWithoutEquationsInputSchema';
import { TopicUncheckedCreateWithoutEquationsInputSchema } from './TopicUncheckedCreateWithoutEquationsInputSchema';
import { TopicCreateOrConnectWithoutEquationsInputSchema } from './TopicCreateOrConnectWithoutEquationsInputSchema';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';

export const TopicUncheckedCreateNestedManyWithoutEquationsInputSchema: z.ZodType<Prisma.TopicUncheckedCreateNestedManyWithoutEquationsInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutEquationsInputSchema),z.lazy(() => TopicCreateWithoutEquationsInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutEquationsInputSchema),z.lazy(() => TopicUncheckedCreateWithoutEquationsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutEquationsInputSchema),z.lazy(() => TopicCreateOrConnectWithoutEquationsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TopicUncheckedCreateNestedManyWithoutEquationsInputSchema;
