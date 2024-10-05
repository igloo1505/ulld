import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema';
import { TopicUpdateManyMutationInputSchema } from './TopicUpdateManyMutationInputSchema';
import { TopicUncheckedUpdateManyWithoutKanbanInputSchema } from './TopicUncheckedUpdateManyWithoutKanbanInputSchema';

export const TopicUpdateManyWithWhereWithoutKanbanInputSchema: z.ZodType<Prisma.TopicUpdateManyWithWhereWithoutKanbanInput> = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateManyMutationInputSchema),z.lazy(() => TopicUncheckedUpdateManyWithoutKanbanInputSchema) ]),
}).strict();

export default TopicUpdateManyWithWhereWithoutKanbanInputSchema;
