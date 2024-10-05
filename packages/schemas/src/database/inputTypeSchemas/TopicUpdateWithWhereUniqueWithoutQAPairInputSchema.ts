import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithoutQAPairInputSchema } from './TopicUpdateWithoutQAPairInputSchema';
import { TopicUncheckedUpdateWithoutQAPairInputSchema } from './TopicUncheckedUpdateWithoutQAPairInputSchema';

export const TopicUpdateWithWhereUniqueWithoutQAPairInputSchema: z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutQAPairInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateWithoutQAPairInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutQAPairInputSchema) ]),
}).strict();

export default TopicUpdateWithWhereUniqueWithoutQAPairInputSchema;
