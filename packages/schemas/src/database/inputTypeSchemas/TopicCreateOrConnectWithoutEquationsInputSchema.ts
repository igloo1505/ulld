import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicCreateWithoutEquationsInputSchema } from './TopicCreateWithoutEquationsInputSchema';
import { TopicUncheckedCreateWithoutEquationsInputSchema } from './TopicUncheckedCreateWithoutEquationsInputSchema';

export const TopicCreateOrConnectWithoutEquationsInputSchema: z.ZodType<Prisma.TopicCreateOrConnectWithoutEquationsInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TopicCreateWithoutEquationsInputSchema),z.lazy(() => TopicUncheckedCreateWithoutEquationsInputSchema) ]),
}).strict();

export default TopicCreateOrConnectWithoutEquationsInputSchema;
