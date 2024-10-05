import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema';
import { TopicUpdateManyMutationInputSchema } from './TopicUpdateManyMutationInputSchema';
import { TopicUncheckedUpdateManyWithoutToDoInputSchema } from './TopicUncheckedUpdateManyWithoutToDoInputSchema';

export const TopicUpdateManyWithWhereWithoutToDoInputSchema: z.ZodType<Prisma.TopicUpdateManyWithWhereWithoutToDoInput> = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateManyMutationInputSchema),z.lazy(() => TopicUncheckedUpdateManyWithoutToDoInputSchema) ]),
}).strict();

export default TopicUpdateManyWithWhereWithoutToDoInputSchema;
