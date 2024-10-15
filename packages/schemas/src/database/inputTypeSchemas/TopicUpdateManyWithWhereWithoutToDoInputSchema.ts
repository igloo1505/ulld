import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema.js';
import { TopicUpdateManyMutationInputSchema } from './TopicUpdateManyMutationInputSchema.js';
import { TopicUncheckedUpdateManyWithoutToDoInputSchema } from './TopicUncheckedUpdateManyWithoutToDoInputSchema.js';
export const TopicUpdateManyWithWhereWithoutToDoInputSchema: z.ZodType<Prisma.TopicUpdateManyWithWhereWithoutToDoInput> = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateManyMutationInputSchema),z.lazy(() => TopicUncheckedUpdateManyWithoutToDoInputSchema) ]),
}).strict();
export default TopicUpdateManyWithWhereWithoutToDoInputSchema;