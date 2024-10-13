import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicScalarWhereInputSchema } from '../TopicScalarWhereInputSchema.js';
import { TopicUpdateManyMutationInputSchema } from '../TopicUpdateManyMutationInputSchema.js';
import { TopicUncheckedUpdateManyWithoutEquationsInputSchema } from '../TopicUncheckedUpdateManyWithoutEquationsInputSchema.js';
export const TopicUpdateManyWithWhereWithoutEquationsInputSchema: z.ZodType<Prisma.TopicUpdateManyWithWhereWithoutEquationsInput> = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateManyMutationInputSchema),z.lazy(() => TopicUncheckedUpdateManyWithoutEquationsInputSchema) ]),
}).strict();
export default TopicUpdateManyWithWhereWithoutEquationsInputSchema;