import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithoutEquationsInputSchema } from './TopicUpdateWithoutEquationsInputSchema';
import { TopicUncheckedUpdateWithoutEquationsInputSchema } from './TopicUncheckedUpdateWithoutEquationsInputSchema';

export const TopicUpdateWithWhereUniqueWithoutEquationsInputSchema: z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutEquationsInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateWithoutEquationsInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutEquationsInputSchema) ]),
}).strict();

export default TopicUpdateWithWhereUniqueWithoutEquationsInputSchema;
