import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QAPairScalarWhereInputSchema } from '../QAPairScalarWhereInputSchema.js';
import { QAPairUpdateManyMutationInputSchema } from '../QAPairUpdateManyMutationInputSchema.js';
import { QAPairUncheckedUpdateManyWithoutTopicsInputSchema } from '../QAPairUncheckedUpdateManyWithoutTopicsInputSchema.js';
export const QAPairUpdateManyWithWhereWithoutTopicsInputSchema: z.ZodType<Prisma.QAPairUpdateManyWithWhereWithoutTopicsInput> = z.object({
  where: z.lazy(() => QAPairScalarWhereInputSchema),
  data: z.union([ z.lazy(() => QAPairUpdateManyMutationInputSchema),z.lazy(() => QAPairUncheckedUpdateManyWithoutTopicsInputSchema) ]),
}).strict();
export default QAPairUpdateManyWithWhereWithoutTopicsInputSchema;