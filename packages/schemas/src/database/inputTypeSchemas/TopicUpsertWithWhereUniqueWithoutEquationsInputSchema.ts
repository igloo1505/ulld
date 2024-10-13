import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from '../TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithoutEquationsInputSchema } from '../TopicUpdateWithoutEquationsInputSchema.js';
import { TopicUncheckedUpdateWithoutEquationsInputSchema } from '../TopicUncheckedUpdateWithoutEquationsInputSchema.js';
import { TopicCreateWithoutEquationsInputSchema } from '../TopicCreateWithoutEquationsInputSchema.js';
import { TopicUncheckedCreateWithoutEquationsInputSchema } from '../TopicUncheckedCreateWithoutEquationsInputSchema.js';
export const TopicUpsertWithWhereUniqueWithoutEquationsInputSchema: z.ZodType<Prisma.TopicUpsertWithWhereUniqueWithoutEquationsInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TopicUpdateWithoutEquationsInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutEquationsInputSchema) ]),
  create: z.union([ z.lazy(() => TopicCreateWithoutEquationsInputSchema),z.lazy(() => TopicUncheckedCreateWithoutEquationsInputSchema) ]),
}).strict();
export default TopicUpsertWithWhereUniqueWithoutEquationsInputSchema;