import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithoutBibEntriesInputSchema } from './TopicUpdateWithoutBibEntriesInputSchema.js';
import { TopicUncheckedUpdateWithoutBibEntriesInputSchema } from './TopicUncheckedUpdateWithoutBibEntriesInputSchema.js';
export const TopicUpdateWithWhereUniqueWithoutBibEntriesInputSchema: z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateWithoutBibEntriesInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutBibEntriesInputSchema) ]),
}).strict();
export default TopicUpdateWithWhereUniqueWithoutBibEntriesInputSchema;