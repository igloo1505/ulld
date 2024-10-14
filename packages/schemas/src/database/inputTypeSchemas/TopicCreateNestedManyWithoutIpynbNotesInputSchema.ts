import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicCreateWithoutIpynbNotesInputSchema } from './TopicCreateWithoutIpynbNotesInputSchema';
import { TopicUncheckedCreateWithoutIpynbNotesInputSchema } from './TopicUncheckedCreateWithoutIpynbNotesInputSchema';
import { TopicCreateOrConnectWithoutIpynbNotesInputSchema } from './TopicCreateOrConnectWithoutIpynbNotesInputSchema';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';

export const TopicCreateNestedManyWithoutIpynbNotesInputSchema: z.ZodType<Prisma.TopicCreateNestedManyWithoutIpynbNotesInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutIpynbNotesInputSchema),z.lazy(() => TopicCreateWithoutIpynbNotesInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutIpynbNotesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutIpynbNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutIpynbNotesInputSchema),z.lazy(() => TopicCreateOrConnectWithoutIpynbNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TopicCreateNestedManyWithoutIpynbNotesInputSchema;
