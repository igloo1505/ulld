import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicCreateWithoutIpynbNotesInputSchema } from '../TopicCreateWithoutIpynbNotesInputSchema.js';
import { TopicUncheckedCreateWithoutIpynbNotesInputSchema } from '../TopicUncheckedCreateWithoutIpynbNotesInputSchema.js';
import { TopicCreateOrConnectWithoutIpynbNotesInputSchema } from '../TopicCreateOrConnectWithoutIpynbNotesInputSchema.js';
import { TopicWhereUniqueInputSchema } from '../TopicWhereUniqueInputSchema.js';
export const TopicUncheckedCreateNestedManyWithoutIpynbNotesInputSchema: z.ZodType<Prisma.TopicUncheckedCreateNestedManyWithoutIpynbNotesInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutIpynbNotesInputSchema),z.lazy(() => TopicCreateWithoutIpynbNotesInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutIpynbNotesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutIpynbNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutIpynbNotesInputSchema),z.lazy(() => TopicCreateOrConnectWithoutIpynbNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default TopicUncheckedCreateNestedManyWithoutIpynbNotesInputSchema;