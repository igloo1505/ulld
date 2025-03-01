import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema.js';
import { TopicUpdateManyMutationInputSchema } from './TopicUpdateManyMutationInputSchema.js';
import { TopicUncheckedUpdateManyWithoutMdxNotesInputSchema } from './TopicUncheckedUpdateManyWithoutMdxNotesInputSchema.js';
export const TopicUpdateManyWithWhereWithoutMdxNotesInputSchema: z.ZodType<Prisma.TopicUpdateManyWithWhereWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateManyMutationInputSchema),z.lazy(() => TopicUncheckedUpdateManyWithoutMdxNotesInputSchema) ]),
}).strict();
export default TopicUpdateManyWithWhereWithoutMdxNotesInputSchema;