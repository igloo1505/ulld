import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';
import { SubjectUpdateWithoutPracticeExamInputSchema } from './SubjectUpdateWithoutPracticeExamInputSchema';
import { SubjectUncheckedUpdateWithoutPracticeExamInputSchema } from './SubjectUncheckedUpdateWithoutPracticeExamInputSchema';

export const SubjectUpdateWithWhereUniqueWithoutPracticeExamInputSchema: z.ZodType<Prisma.SubjectUpdateWithWhereUniqueWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateWithoutPracticeExamInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutPracticeExamInputSchema) ]),
}).strict();

export default SubjectUpdateWithWhereUniqueWithoutPracticeExamInputSchema;
