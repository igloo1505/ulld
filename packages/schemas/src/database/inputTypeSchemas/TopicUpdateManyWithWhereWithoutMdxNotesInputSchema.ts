import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema';
import { TopicUpdateManyMutationInputSchema } from './TopicUpdateManyMutationInputSchema';
import { TopicUncheckedUpdateManyWithoutMdxNotesInputSchema } from './TopicUncheckedUpdateManyWithoutMdxNotesInputSchema';

export const TopicUpdateManyWithWhereWithoutMdxNotesInputSchema: z.ZodType<Prisma.TopicUpdateManyWithWhereWithoutMdxNotesInput> = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateManyMutationInputSchema),z.lazy(() => TopicUncheckedUpdateManyWithoutMdxNotesInputSchema) ]),
}).strict();

export default TopicUpdateManyWithWhereWithoutMdxNotesInputSchema;
