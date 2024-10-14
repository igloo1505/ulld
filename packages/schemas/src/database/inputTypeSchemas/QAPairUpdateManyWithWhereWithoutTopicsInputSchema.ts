import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairScalarWhereInputSchema } from './QAPairScalarWhereInputSchema';
import { QAPairUpdateManyMutationInputSchema } from './QAPairUpdateManyMutationInputSchema';
import { QAPairUncheckedUpdateManyWithoutTopicsInputSchema } from './QAPairUncheckedUpdateManyWithoutTopicsInputSchema';

export const QAPairUpdateManyWithWhereWithoutTopicsInputSchema: z.ZodType<Prisma.QAPairUpdateManyWithWhereWithoutTopicsInput> = z.object({
  where: z.lazy(() => QAPairScalarWhereInputSchema),
  data: z.union([ z.lazy(() => QAPairUpdateManyMutationInputSchema),z.lazy(() => QAPairUncheckedUpdateManyWithoutTopicsInputSchema) ]),
}).strict();

export default QAPairUpdateManyWithWhereWithoutTopicsInputSchema;
