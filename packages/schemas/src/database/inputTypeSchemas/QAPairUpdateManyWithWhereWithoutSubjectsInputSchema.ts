import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { QAPairScalarWhereInputSchema } from '../QAPairScalarWhereInputSchema.js';
import { QAPairUpdateManyMutationInputSchema } from '../QAPairUpdateManyMutationInputSchema.js';
import { QAPairUncheckedUpdateManyWithoutSubjectsInputSchema } from '../QAPairUncheckedUpdateManyWithoutSubjectsInputSchema.js';
export const QAPairUpdateManyWithWhereWithoutSubjectsInputSchema: z.ZodType<Prisma.QAPairUpdateManyWithWhereWithoutSubjectsInput> = z.object({
  where: z.lazy(() => QAPairScalarWhereInputSchema),
  data: z.union([ z.lazy(() => QAPairUpdateManyMutationInputSchema),z.lazy(() => QAPairUncheckedUpdateManyWithoutSubjectsInputSchema) ]),
}).strict();
export default QAPairUpdateManyWithWhereWithoutSubjectsInputSchema;