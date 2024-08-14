import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithoutMdxNotesInputSchema } from './TopicUpdateWithoutMdxNotesInputSchema';
import { TopicUncheckedUpdateWithoutMdxNotesInputSchema } from './TopicUncheckedUpdateWithoutMdxNotesInputSchema';

export const TopicUpdateWithWhereUniqueWithoutMdxNotesInputSchema: z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateWithoutMdxNotesInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutMdxNotesInputSchema) ]),
}).strict();

export default TopicUpdateWithWhereUniqueWithoutMdxNotesInputSchema;
