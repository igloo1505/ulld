import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithoutIpynbNotesInputSchema } from './TopicUpdateWithoutIpynbNotesInputSchema.js';
import { TopicUncheckedUpdateWithoutIpynbNotesInputSchema } from './TopicUncheckedUpdateWithoutIpynbNotesInputSchema.js';
export const TopicUpdateWithWhereUniqueWithoutIpynbNotesInputSchema: z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateWithoutIpynbNotesInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutIpynbNotesInputSchema) ]),
}).strict();
export default TopicUpdateWithWhereUniqueWithoutIpynbNotesInputSchema;