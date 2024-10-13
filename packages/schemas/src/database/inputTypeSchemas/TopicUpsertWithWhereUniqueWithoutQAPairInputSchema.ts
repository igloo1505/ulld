import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from '../TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithoutQAPairInputSchema } from '../TopicUpdateWithoutQAPairInputSchema.js';
import { TopicUncheckedUpdateWithoutQAPairInputSchema } from '../TopicUncheckedUpdateWithoutQAPairInputSchema.js';
import { TopicCreateWithoutQAPairInputSchema } from '../TopicCreateWithoutQAPairInputSchema.js';
import { TopicUncheckedCreateWithoutQAPairInputSchema } from '../TopicUncheckedCreateWithoutQAPairInputSchema.js';
export const TopicUpsertWithWhereUniqueWithoutQAPairInputSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutQAPairInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TopicUpdateWithoutQAPairInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutQAPairInputSchema) ]),
  create: z.union([ z.lazy(() => TopicCreateWithoutQAPairInputSchema),z.lazy(() => TopicUncheckedCreateWithoutQAPairInputSchema) ]),
}).strict();
export default TopicUpsertWithWhereUniqueWithoutQAPairInputSchema;