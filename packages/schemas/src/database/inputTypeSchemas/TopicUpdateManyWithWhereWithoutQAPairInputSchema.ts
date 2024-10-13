import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TopicScalarWhereInputSchema } from '../TopicScalarWhereInputSchema.js';
import { TopicUpdateManyMutationInputSchema } from '../TopicUpdateManyMutationInputSchema.js';
import { TopicUncheckedUpdateManyWithoutQAPairInputSchema } from '../TopicUncheckedUpdateManyWithoutQAPairInputSchema.js';
export const TopicUpdateManyWithWhereWithoutQAPairInputSchema: z.ZodType<Prisma.TopicUpdateManyWithWhereWithoutQAPairInput> = z.object({
  where: z.lazy(() => TopicScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TopicUpdateManyMutationInputSchema),z.lazy(() => TopicUncheckedUpdateManyWithoutQAPairInputSchema) ]),
}).strict();
export default TopicUpdateManyWithWhereWithoutQAPairInputSchema;