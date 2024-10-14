import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { QAPairCreateWithoutPracticeExamInputSchema } from './QAPairCreateWithoutPracticeExamInputSchema';
import { QAPairUncheckedCreateWithoutPracticeExamInputSchema } from './QAPairUncheckedCreateWithoutPracticeExamInputSchema';
import { QAPairCreateOrConnectWithoutPracticeExamInputSchema } from './QAPairCreateOrConnectWithoutPracticeExamInputSchema';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema';

export const QAPairUncheckedCreateNestedManyWithoutPracticeExamInputSchema: z.ZodType<Prisma.QAPairUncheckedCreateNestedManyWithoutPracticeExamInput> = z.object({
  create: z.union([ z.lazy(() => QAPairCreateWithoutPracticeExamInputSchema),z.lazy(() => QAPairCreateWithoutPracticeExamInputSchema).array(),z.lazy(() => QAPairUncheckedCreateWithoutPracticeExamInputSchema),z.lazy(() => QAPairUncheckedCreateWithoutPracticeExamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => QAPairCreateOrConnectWithoutPracticeExamInputSchema),z.lazy(() => QAPairCreateOrConnectWithoutPracticeExamInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => QAPairWhereUniqueInputSchema),z.lazy(() => QAPairWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default QAPairUncheckedCreateNestedManyWithoutPracticeExamInputSchema;
