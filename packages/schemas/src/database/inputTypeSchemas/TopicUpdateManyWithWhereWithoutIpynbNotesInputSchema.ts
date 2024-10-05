import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema';
import { TopicUpdateManyMutationInputSchema } from './TopicUpdateManyMutationInputSchema';
import { TopicUncheckedUpdateManyWithoutIpynbNotesInputSchema } from './TopicUncheckedUpdateManyWithoutIpynbNotesInputSchema';

export const TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema: z.ZodType<Prisma.TopicUpdateManyWithWhereWithoutIpynbNotesInput> = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateManyMutationInputSchema),z.lazy(() => TopicUncheckedUpdateManyWithoutIpynbNotesInputSchema) ]),
}).strict();

export default TopicUpdateManyWithWhereWithoutIpynbNotesInputSchema;
