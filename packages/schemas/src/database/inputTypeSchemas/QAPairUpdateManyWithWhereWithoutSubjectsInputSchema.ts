import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairScalarWhereInputSchema } from './QAPairScalarWhereInputSchema';
import { QAPairUpdateManyMutationInputSchema } from './QAPairUpdateManyMutationInputSchema';
import { QAPairUncheckedUpdateManyWithoutSubjectsInputSchema } from './QAPairUncheckedUpdateManyWithoutSubjectsInputSchema';

export const QAPairUpdateManyWithWhereWithoutSubjectsInputSchema: z.ZodType<Prisma.QAPairUpdateManyWithWhereWithoutSubjectsInput> = z.object({
  where: z.lazy(() => QAPairScalarWhereInputSchema),
  data: z.union([ z.lazy(() => QAPairUpdateManyMutationInputSchema),z.lazy(() => QAPairUncheckedUpdateManyWithoutSubjectsInputSchema) ]),
}).strict();

export default QAPairUpdateManyWithWhereWithoutSubjectsInputSchema;
