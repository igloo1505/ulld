import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamCreateWithoutQuestionsInputSchema } from './PracticeExamCreateWithoutQuestionsInputSchema';
import { PracticeExamUncheckedCreateWithoutQuestionsInputSchema } from './PracticeExamUncheckedCreateWithoutQuestionsInputSchema';
import { PracticeExamCreateOrConnectWithoutQuestionsInputSchema } from './PracticeExamCreateOrConnectWithoutQuestionsInputSchema';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema';

export const PracticeExamCreateNestedManyWithoutQuestionsInputSchema: z.ZodType<Prisma.PracticeExamCreateNestedManyWithoutQuestionsInput> = z.object({
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutQuestionsInputSchema),z.lazy(() => PracticeExamCreateWithoutQuestionsInputSchema).array(),z.lazy(() => PracticeExamUncheckedCreateWithoutQuestionsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutQuestionsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PracticeExamCreateOrConnectWithoutQuestionsInputSchema),z.lazy(() => PracticeExamCreateOrConnectWithoutQuestionsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PracticeExamWhereUniqueInputSchema),z.lazy(() => PracticeExamWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PracticeExamCreateNestedManyWithoutQuestionsInputSchema;
