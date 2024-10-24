import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithoutEquationsInputSchema } from './TopicUpdateWithoutEquationsInputSchema.js';
import { TopicUncheckedUpdateWithoutEquationsInputSchema } from './TopicUncheckedUpdateWithoutEquationsInputSchema.js';
export const TopicUpdateWithWhereUniqueWithoutEquationsInputSchema: z.ZodType<Prisma.TopicUpdateWithWhereUniqueWithoutEquationsInput> = z.object({
  where: z.lazy(() => TopicWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateWithoutEquationsInputSchema),z.lazy(() => TopicUncheckedUpdateWithoutEquationsInputSchema) ]),
}).strict();
export default TopicUpdateWithWhereUniqueWithoutEquationsInputSchema;