import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema';
import { TopicUpdateManyMutationInputSchema } from './TopicUpdateManyMutationInputSchema';
import { TopicUncheckedUpdateManyWithoutEquationsInputSchema } from './TopicUncheckedUpdateManyWithoutEquationsInputSchema';

export const TopicUpdateManyWithWhereWithoutEquationsInputSchema: z.ZodType<Prisma.TopicUpdateManyWithWhereWithoutEquationsInput> = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateManyMutationInputSchema),z.lazy(() => TopicUncheckedUpdateManyWithoutEquationsInputSchema) ]),
}).strict();

export default TopicUpdateManyWithWhereWithoutEquationsInputSchema;
