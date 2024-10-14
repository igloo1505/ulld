import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithoutEquationsInputSchema } from './TopicUpdateWithoutEquationsInputSchema';
import { TopicUncheckedUpdateWithoutEquationsInputSchema } from './TopicUncheckedUpdateWithoutEquationsInputSchema';
import { TopicCreateWithoutEquationsInputSchema } from './TopicCreateWithoutEquationsInputSchema';
import { TopicUncheckedCreateWithoutEquationsInputSchema } from './TopicUncheckedCreateWithoutEquationsInputSchema';

export const TopicUpsertWithWhereUniqueWithoutEquationsInputSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutEquationsInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TopicUpdateWithoutEquationsInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutEquationsInputSchema) ]),
  create: z.union([ z.lazy(() => TopicCreateWithoutEquationsInputSchema),z.lazy(() => TopicUncheckedCreateWithoutEquationsInputSchema) ]),
}).strict();

export default TopicUpsertWithWhereUniqueWithoutEquationsInputSchema;
