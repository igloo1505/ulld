import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithoutIpynbNotesInputSchema } from './TopicUpdateWithoutIpynbNotesInputSchema';
import { TopicUncheckedUpdateWithoutIpynbNotesInputSchema } from './TopicUncheckedUpdateWithoutIpynbNotesInputSchema';
import { TopicCreateWithoutIpynbNotesInputSchema } from './TopicCreateWithoutIpynbNotesInputSchema';
import { TopicUncheckedCreateWithoutIpynbNotesInputSchema } from './TopicUncheckedCreateWithoutIpynbNotesInputSchema';

export const TopicUpsertWithWhereUniqueWithoutIpynbNotesInputSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TopicUpdateWithoutIpynbNotesInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutIpynbNotesInputSchema) ]),
  create: z.union([ z.lazy(() => TopicCreateWithoutIpynbNotesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutIpynbNotesInputSchema) ]),
}).strict();

export default TopicUpsertWithWhereUniqueWithoutIpynbNotesInputSchema;
