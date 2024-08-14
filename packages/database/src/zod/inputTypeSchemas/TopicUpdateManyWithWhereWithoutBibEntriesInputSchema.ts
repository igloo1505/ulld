import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema';
import { TopicUpdateManyMutationInputSchema } from './TopicUpdateManyMutationInputSchema';
import { TopicUncheckedUpdateManyWithoutBibEntriesInputSchema } from './TopicUncheckedUpdateManyWithoutBibEntriesInputSchema';

export const TopicUpdateManyWithWhereWithoutBibEntriesInputSchema: z.ZodType<Prisma.TopicUpdateManyWithWhereWithoutBibEntriesInput> = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateManyMutationInputSchema),z.lazy(() => TopicUncheckedUpdateManyWithoutBibEntriesInputSchema) ]),
}).strict();

export default TopicUpdateManyWithWhereWithoutBibEntriesInputSchema;
