import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithoutMdxNotesInputSchema } from './TopicUpdateWithoutMdxNotesInputSchema.js';
import { TopicUncheckedUpdateWithoutMdxNotesInputSchema } from './TopicUncheckedUpdateWithoutMdxNotesInputSchema.js';
import { TopicCreateWithoutMdxNotesInputSchema } from './TopicCreateWithoutMdxNotesInputSchema.js';
import { TopicUncheckedCreateWithoutMdxNotesInputSchema } from './TopicUncheckedCreateWithoutMdxNotesInputSchema.js';
export const TopicUpsertWithWhereUniqueWithoutMdxNotesInputSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TopicUpdateWithoutMdxNotesInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutMdxNotesInputSchema) ]),
  create: z.union([ z.lazy(() => TopicCreateWithoutMdxNotesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutMdxNotesInputSchema) ]),
}).strict();
export default TopicUpsertWithWhereUniqueWithoutMdxNotesInputSchema;