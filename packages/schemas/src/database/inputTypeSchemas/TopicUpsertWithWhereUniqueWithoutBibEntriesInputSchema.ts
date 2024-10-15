import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithoutBibEntriesInputSchema } from './TopicUpdateWithoutBibEntriesInputSchema.js';
import { TopicUncheckedUpdateWithoutBibEntriesInputSchema } from './TopicUncheckedUpdateWithoutBibEntriesInputSchema.js';
import { TopicCreateWithoutBibEntriesInputSchema } from './TopicCreateWithoutBibEntriesInputSchema.js';
import { TopicUncheckedCreateWithoutBibEntriesInputSchema } from './TopicUncheckedCreateWithoutBibEntriesInputSchema.js';
export const TopicUpsertWithWhereUniqueWithoutBibEntriesInputSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TopicUpdateWithoutBibEntriesInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutBibEntriesInputSchema) ]),
  create: z.union([ z.lazy(() => TopicCreateWithoutBibEntriesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutBibEntriesInputSchema) ]),
}).strict();
export default TopicUpsertWithWhereUniqueWithoutBibEntriesInputSchema;