import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { SubjectWhereUniqueInputSchema } from '../SubjectWhereUniqueInputSchema.js';
import { SubjectUpdateWithoutPracticeExamInputSchema } from '../SubjectUpdateWithoutPracticeExamInputSchema.js';
import { SubjectUncheckedUpdateWithoutPracticeExamInputSchema } from '../SubjectUncheckedUpdateWithoutPracticeExamInputSchema.js';
import { SubjectCreateWithoutPracticeExamInputSchema } from '../SubjectCreateWithoutPracticeExamInputSchema.js';
import { SubjectUncheckedCreateWithoutPracticeExamInputSchema } from '../SubjectUncheckedCreateWithoutPracticeExamInputSchema.js';
export const SubjectUpsertWithWhereUniqueWithoutPracticeExamInputSchema: z.ZodType<Prisma.SubjectUpsertWithWhereUniqueWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => SubjectWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => SubjectUpdateWithoutPracticeExamInputSchema),z.lazy(() => SubjectUncheckedUpdateWithoutPracticeExamInputSchema) ]),
  create: z.union([ z.lazy(() => SubjectCreateWithoutPracticeExamInputSchema),z.lazy(() => SubjectUncheckedCreateWithoutPracticeExamInputSchema) ]),
}).strict();
export default SubjectUpsertWithWhereUniqueWithoutPracticeExamInputSchema;