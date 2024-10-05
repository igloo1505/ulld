import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicCreateWithoutBibEntriesInputSchema } from './TopicCreateWithoutBibEntriesInputSchema';
import { TopicUncheckedCreateWithoutBibEntriesInputSchema } from './TopicUncheckedCreateWithoutBibEntriesInputSchema';
import { TopicCreateOrConnectWithoutBibEntriesInputSchema } from './TopicCreateOrConnectWithoutBibEntriesInputSchema';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';

export const TopicUncheckedCreateNestedManyWithoutBibEntriesInputSchema: z.ZodType<Prisma.TopicUncheckedCreateNestedManyWithoutBibEntriesInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutBibEntriesInputSchema),z.lazy(() => TopicCreateWithoutBibEntriesInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutBibEntriesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutBibEntriesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutBibEntriesInputSchema),z.lazy(() => TopicCreateOrConnectWithoutBibEntriesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TopicUncheckedCreateNestedManyWithoutBibEntriesInputSchema;
