import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicCreateWithoutMdxNotesInputSchema } from './TopicCreateWithoutMdxNotesInputSchema';
import { TopicUncheckedCreateWithoutMdxNotesInputSchema } from './TopicUncheckedCreateWithoutMdxNotesInputSchema';
import { TopicCreateOrConnectWithoutMdxNotesInputSchema } from './TopicCreateOrConnectWithoutMdxNotesInputSchema';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';

export const TopicCreateNestedManyWithoutMdxNotesInputSchema: z.ZodType<Prisma.TopicCreateNestedManyWithoutMdxNotesInput> = z.object({
  create: z.union([ z.lazy(() => TopicCreateWithoutMdxNotesInputSchema),z.lazy(() => TopicCreateWithoutMdxNotesInputSchema).array(),z.lazy(() => TopicUncheckedCreateWithoutMdxNotesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutMdxNotesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TopicCreateOrConnectWithoutMdxNotesInputSchema),z.lazy(() => TopicCreateOrConnectWithoutMdxNotesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TopicWhereUniqueInputSchema),z.lazy(() => TopicWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TopicCreateNestedManyWithoutMdxNotesInputSchema;
