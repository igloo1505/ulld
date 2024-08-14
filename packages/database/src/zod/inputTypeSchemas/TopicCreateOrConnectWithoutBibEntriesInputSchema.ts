import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicCreateWithoutBibEntriesInputSchema } from './TopicCreateWithoutBibEntriesInputSchema';
import { TopicUncheckedCreateWithoutBibEntriesInputSchema } from './TopicUncheckedCreateWithoutBibEntriesInputSchema';

export const TopicCreateOrConnectWithoutBibEntriesInputSchema: z.ZodType<Prisma.TopicCreateOrConnectWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TopicCreateWithoutBibEntriesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutBibEntriesInputSchema) ]),
}).strict();

export default TopicCreateOrConnectWithoutBibEntriesInputSchema;
