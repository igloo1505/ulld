import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithoutMdxNotesInputSchema } from './TopicUpdateWithoutMdxNotesInputSchema';
import { TopicUncheckedUpdateWithoutMdxNotesInputSchema } from './TopicUncheckedUpdateWithoutMdxNotesInputSchema';
import { TopicCreateWithoutMdxNotesInputSchema } from './TopicCreateWithoutMdxNotesInputSchema';
import { TopicUncheckedCreateWithoutMdxNotesInputSchema } from './TopicUncheckedCreateWithoutMdxNotesInputSchema';

export const TopicUpsertWithWhereUniqueWithoutMdxNotesInputSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TopicUpdateWithoutMdxNotesInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutMdxNotesInputSchema) ]),
  create: z.union([ z.lazy(() => TopicCreateWithoutMdxNotesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutMdxNotesInputSchema) ]),
}).strict();

export default TopicUpsertWithWhereUniqueWithoutMdxNotesInputSchema;
