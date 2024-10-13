import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from '../TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithoutIpynbNotesInputSchema } from '../TopicUpdateWithoutIpynbNotesInputSchema.js';
import { TopicUncheckedUpdateWithoutIpynbNotesInputSchema } from '../TopicUncheckedUpdateWithoutIpynbNotesInputSchema.js';
import { TopicCreateWithoutIpynbNotesInputSchema } from '../TopicCreateWithoutIpynbNotesInputSchema.js';
import { TopicUncheckedCreateWithoutIpynbNotesInputSchema } from '../TopicUncheckedCreateWithoutIpynbNotesInputSchema.js';
export const TopicUpsertWithWhereUniqueWithoutIpynbNotesInputSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TopicUpdateWithoutIpynbNotesInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutIpynbNotesInputSchema) ]),
  create: z.union([ z.lazy(() => TopicCreateWithoutIpynbNotesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutIpynbNotesInputSchema) ]),
}).strict();
export default TopicUpsertWithWhereUniqueWithoutIpynbNotesInputSchema;