import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QAPairScalarWhereInputSchema } from '../QAPairScalarWhereInputSchema.js';
import { QAPairUpdateManyMutationInputSchema } from '../QAPairUpdateManyMutationInputSchema.js';
import { QAPairUncheckedUpdateManyWithoutTagsInputSchema } from '../QAPairUncheckedUpdateManyWithoutTagsInputSchema.js';
export const QAPairUpdateManyWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.QAPairUpdateManyWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => QAPairScalarWhereInputSchema),
  data: z.union([ z.lazy(() => QAPairUpdateManyMutationInputSchema),z.lazy(() => QAPairUncheckedUpdateManyWithoutTagsInputSchema) ]),
}).strict();
export default QAPairUpdateManyWithWhereWithoutTagsInputSchema;