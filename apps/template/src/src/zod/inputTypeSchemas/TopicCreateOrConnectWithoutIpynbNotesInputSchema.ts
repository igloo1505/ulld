import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicCreateWithoutIpynbNotesInputSchema } from './TopicCreateWithoutIpynbNotesInputSchema';
import { TopicUncheckedCreateWithoutIpynbNotesInputSchema } from './TopicUncheckedCreateWithoutIpynbNotesInputSchema';

export const TopicCreateOrConnectWithoutIpynbNotesInputSchema: z.ZodType<Prisma.TopicCreateOrConnectWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TopicCreateWithoutIpynbNotesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutIpynbNotesInputSchema) ]),
}).strict();

export default TopicCreateOrConnectWithoutIpynbNotesInputSchema;
