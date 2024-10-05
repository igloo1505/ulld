import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithoutBibEntriesInputSchema } from './TopicUpdateWithoutBibEntriesInputSchema';
import { TopicUncheckedUpdateWithoutBibEntriesInputSchema } from './TopicUncheckedUpdateWithoutBibEntriesInputSchema';
import { TopicCreateWithoutBibEntriesInputSchema } from './TopicCreateWithoutBibEntriesInputSchema';
import { TopicUncheckedCreateWithoutBibEntriesInputSchema } from './TopicUncheckedCreateWithoutBibEntriesInputSchema';

export const TopicUpsertWithWhereUniqueWithoutBibEntriesInputSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TopicUpdateWithoutBibEntriesInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutBibEntriesInputSchema) ]),
  create: z.union([ z.lazy(() => TopicCreateWithoutBibEntriesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutBibEntriesInputSchema) ]),
}).strict();

export default TopicUpsertWithWhereUniqueWithoutBibEntriesInputSchema;
