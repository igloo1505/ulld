import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutPracticeExamInputSchema } from './SubjectUpdateWithoutPracticeExamInputSchema';
import { SubjectUncheckedUpdateWithoutPracticeExamInputSchema } from './SubjectUncheckedUpdateWithoutPracticeExamInputSchema';
import { SubjectCreateWithoutPracticeExamInputSchema } from './SubjectCreateWithoutPracticeExamInputSchema';
import { SubjectUncheckedCreateWithoutPracticeExamInputSchema } from './SubjectUncheckedCreateWithoutPracticeExamInputSchema';

export const SubjectUpsertWithWhereUniqueWithoutPracticeExamInputSchema: z.ZodType<Prisma.SubjectUpsertWithWhereUniqueWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubjectUpdateWithoutPracticeExamInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutPracticeExamInputSchema) ]),
  create: z.union([ z.lazy(() => SubjectCreateWithoutPracticeExamInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutPracticeExamInputSchema) ]),
}).strict();

export default SubjectUpsertWithWhereUniqueWithoutPracticeExamInputSchema;
