import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithoutBibEntriesInputSchema } from './TopicUpdateWithoutBibEntriesInputSchema';
import { TopicUncheckedUpdateWithoutBibEntriesInputSchema } from './TopicUncheckedUpdateWithoutBibEntriesInputSchema';

export const TopicUpdateWithWhereUniqueWithoutBibEntriesInputSchema: z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateWithoutBibEntriesInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutBibEntriesInputSchema) ]),
}).strict();

export default TopicUpdateWithWhereUniqueWithoutBibEntriesInputSchema;
