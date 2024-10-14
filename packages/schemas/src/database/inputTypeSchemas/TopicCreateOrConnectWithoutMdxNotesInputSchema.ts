import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicCreateWithoutMdxNotesInputSchema } from './TopicCreateWithoutMdxNotesInputSchema';
import { TopicUncheckedCreateWithoutMdxNotesInputSchema } from './TopicUncheckedCreateWithoutMdxNotesInputSchema';

export const TopicCreateOrConnectWithoutMdxNotesInputSchema: z.ZodType<Prisma.TopicCreateOrConnectWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TopicCreateWithoutMdxNotesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutMdxNotesInputSchema) ]),
}).strict();

export default TopicCreateOrConnectWithoutMdxNotesInputSchema;
