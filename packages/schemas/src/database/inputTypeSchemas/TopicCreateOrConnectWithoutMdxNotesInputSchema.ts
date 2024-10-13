import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from '../TopicWhereUniqueInputSchema.js';
import { TopicCreateWithoutMdxNotesInputSchema } from '../TopicCreateWithoutMdxNotesInputSchema.js';
import { TopicUncheckedCreateWithoutMdxNotesInputSchema } from '../TopicUncheckedCreateWithoutMdxNotesInputSchema.js';
export const TopicCreateOrConnectWithoutMdxNotesInputSchema: z.ZodType<Prisma.TopicCreateOrConnectWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TopicCreateWithoutMdxNotesInputSchema),z.lazy(() => TopicUncheckedCreateWithoutMdxNotesInputSchema) ]),
}).strict();
export default TopicCreateOrConnectWithoutMdxNotesInputSchema;