import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutPracticeExamInputSchema } from './TagUpdateWithoutPracticeExamInputSchema';
import { TagUncheckedUpdateWithoutPracticeExamInputSchema } from './TagUncheckedUpdateWithoutPracticeExamInputSchema';
import { TagCreateWithoutPracticeExamInputSchema } from './TagCreateWithoutPracticeExamInputSchema';
import { TagUncheckedCreateWithoutPracticeExamInputSchema } from './TagUncheckedCreateWithoutPracticeExamInputSchema';

export const TagUpsertWithWhereUniqueWithoutPracticeExamInputSchema: z.ZodType<Prisma.TagUpsertWithWhereUniqueWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TagUpdateWithoutPracticeExamInputSchema),z.lazy(() => TagUncheckedUpdateWithoutPracticeExamInputSchema) ]),
  create: z.union([ z.lazy(() => TagCreateWithoutPracticeExamInputSchema),z.lazy(() => TagUncheckedCreateWithoutPracticeExamInputSchema) ]),
}).strict();

export default TagUpsertWithWhereUniqueWithoutPracticeExamInputSchema;
