import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema';
import { TopicUpdateManyMutationInputSchema } from './TopicUpdateManyMutationInputSchema';
import { TopicUncheckedUpdateManyWithoutQAPairInputSchema } from './TopicUncheckedUpdateManyWithoutQAPairInputSchema';

export const TopicUpdateManyWithWhereWithoutQAPairInputSchema: z.ZodType<Prisma.TopicUpdateManyWithWhereWithoutQAPairInput> = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateManyMutationInputSchema),z.lazy(() => TopicUncheckedUpdateManyWithoutQAPairInputSchema) ]),
}).strict();

export default TopicUpdateManyWithWhereWithoutQAPairInputSchema;
