import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagWhereUniqueInputSchema } from '../TagWhereUniqueInputSchema.js';
import { TagUpdateWithoutPracticeExamInputSchema } from '../TagUpdateWithoutPracticeExamInputSchema.js';
import { TagUncheckedUpdateWithoutPracticeExamInputSchema } from '../TagUncheckedUpdateWithoutPracticeExamInputSchema.js';
import { TagCreateWithoutPracticeExamInputSchema } from '../TagCreateWithoutPracticeExamInputSchema.js';
import { TagUncheckedCreateWithoutPracticeExamInputSchema } from '../TagUncheckedCreateWithoutPracticeExamInputSchema.js';
export const TagUpsertWithWhereUniqueWithoutPracticeExamInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutPracticeExamInputSchema),z.lazy(() => TagUncheckedUpdateWithoutPracticeExamInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutPracticeExamInputSchema),z.lazy(() => TagUncheckedCreateWithoutPracticeExamInputSchema) ]),
}).strict();
export default TagUpsertWithWhereUniqueWithoutPracticeExamInputSchema;