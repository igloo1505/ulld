import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SubjectCreateWithoutPracticeExamInputSchema } from './SubjectCreateWithoutPracticeExamInputSchema';
import { SubjectUncheckedCreateWithoutPracticeExamInputSchema } from './SubjectUncheckedCreateWithoutPracticeExamInputSchema';
import { SubjectCreateOrConnectWithoutPracticeExamInputSchema } from './SubjectCreateOrConnectWithoutPracticeExamInputSchema';
import { SubjectWhereUniqueInputSchema } from './SubjectWhereUniqueInputSchema';

export const SubjectUncheckedCreateNestedManyWithoutPracticeExamInputSchema: z.ZodType<Prisma.SubjectUncheckedCreateNestedManyWithoutPracticeExamInput> = z.object({
  create: z.union([ z.lazy(() => SubjectCreateWithoutPracticeExamInputSchema),z.lazy(() => SubjectCreateWithoutPracticeExamInputSchema).array(),z.lazy(() => SubjectUncheckedCreateWithoutPracticeExamInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutPracticeExamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => SubjectCreateOrConnectWithoutPracticeExamInputSchema),z.lazy(() => SubjectCreateOrConnectWithoutPracticeExamInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => SubjectWhereUniqueInputSchema),z.lazy(() => SubjectWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default SubjectUncheckedCreateNestedManyWithoutPracticeExamInputSchema;
