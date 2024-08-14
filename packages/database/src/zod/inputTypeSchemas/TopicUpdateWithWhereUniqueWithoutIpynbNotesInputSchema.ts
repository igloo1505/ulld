import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithoutIpynbNotesInputSchema } from './TopicUpdateWithoutIpynbNotesInputSchema';
import { TopicUncheckedUpdateWithoutIpynbNotesInputSchema } from './TopicUncheckedUpdateWithoutIpynbNotesInputSchema';

export const TopicUpdateWithWhereUniqueWithoutIpynbNotesInputSchema: z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateWithoutIpynbNotesInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutIpynbNotesInputSchema) ]),
}).strict();

export default TopicUpdateWithWhereUniqueWithoutIpynbNotesInputSchema;
