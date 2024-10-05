import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairScalarWhereInputSchema } from './QAPairScalarWhereInputSchema';
import { QAPairUpdateManyMutationInputSchema } from './QAPairUpdateManyMutationInputSchema';
import { QAPairUncheckedUpdateManyWithoutPracticeExamInputSchema } from './QAPairUncheckedUpdateManyWithoutPracticeExamInputSchema';

export const QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema: z.ZodType<Prisma.QAPairUpdateManyWithWhereWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => QAPairScalarWhereInputSchema),
  data: z.union([ z.lazy(() => QAPairUpdateManyMutationInputSchema),z.lazy(() => QAPairUncheckedUpdateManyWithoutPracticeExamInputSchema) ]),
}).strict();

export default QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema;
