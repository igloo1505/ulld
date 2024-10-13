import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from '../TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithoutMdxNotesInputSchema } from '../TopicUpdateWithoutMdxNotesInputSchema.js';
import { TopicUncheckedUpdateWithoutMdxNotesInputSchema } from '../TopicUncheckedUpdateWithoutMdxNotesInputSchema.js';
export const TopicUpdateWithWhereUniqueWithoutMdxNotesInputSchema: z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateWithoutMdxNotesInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutMdxNotesInputSchema) ]),
}).strict();
export default TopicUpdateWithWhereUniqueWithoutMdxNotesInputSchema;