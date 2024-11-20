import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectCreateWithoutPracticeExamInputSchema } from './SubjectCreateWithoutPracticeExamInputSchema';
import { SubjectUncheckedCreateWithoutPracticeExamInputSchema } from './SubjectUncheckedCreateWithoutPracticeExamInputSchema';

export const SubjectCreateOrConnectWithoutPracticeExamInputSchema: z.ZodType<Prisma.SubjectCreateOrConnectWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SubjectCreateWithoutPracticeExamInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutPracticeExamInputSchema) ]),
}).strict();

export default SubjectCreateOrConnectWithoutPracticeExamInputSchema;
