import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema';
import { PracticeExamCreateWithoutQuestionsInputSchema } from './PracticeExamCreateWithoutQuestionsInputSchema';
import { PracticeExamUncheckedCreateWithoutQuestionsInputSchema } from './PracticeExamUncheckedCreateWithoutQuestionsInputSchema';

export const PracticeExamCreateOrConnectWithoutQuestionsInputSchema: z.ZodType<Prisma.PracticeExamCreateOrConnectWithoutQuestionsInput> = z.object({
  where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutQuestionsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutQuestionsInputSchema) ]),
}).strict();

export default PracticeExamCreateOrConnectWithoutQuestionsInputSchema;
