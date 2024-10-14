import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema';
import { TopicUpdateWithoutQAPairInputSchema } from './TopicUpdateWithoutQAPairInputSchema';
import { TopicUncheckedUpdateWithoutQAPairInputSchema } from './TopicUncheckedUpdateWithoutQAPairInputSchema';
import { TopicCreateWithoutQAPairInputSchema } from './TopicCreateWithoutQAPairInputSchema';
import { TopicUncheckedCreateWithoutQAPairInputSchema } from './TopicUncheckedCreateWithoutQAPairInputSchema';

export const TopicUpsertWithWhereUniqueWithoutQAPairInputSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutQAPairInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TopicUpdateWithoutQAPairInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutQAPairInputSchema) ]),
  create: z.union([ z.lazy(() => TopicCreateWithoutQAPairInputSchema),z.lazy(() => TopicUncheckedCreateWithoutQAPairInputSchema) ]),
}).strict();

export default TopicUpsertWithWhereUniqueWithoutQAPairInputSchema;
