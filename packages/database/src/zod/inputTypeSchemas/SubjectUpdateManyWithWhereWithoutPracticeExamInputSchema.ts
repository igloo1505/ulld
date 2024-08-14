import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectScalarWhereInputSchema } from './SubjectScalarWhereInputSchema';
import { SubjectUpdateManyMutationInputSchema } from './SubjectUpdateManyMutationInputSchema';
import { SubjectUncheckedUpdateManyWithoutPracticeExamInputSchema } from './SubjectUncheckedUpdateManyWithoutPracticeExamInputSchema';

export const SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema: z.ZodType<Prisma.SubjectUpdateManyWithWhereWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => SubjectScalarWhereInputSchema),
  data: z.union([ z.lazy(() => SubjectUpdateManyMutationInputSchema),z.lazy(() => SubjectUncheckedUpdateManyWithoutPracticeExamInputSchema) ]),
}).strict();

export default SubjectUpdateManyWithWhereWithoutPracticeExamInputSchema;
