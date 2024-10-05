import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagUpdateWithoutPracticeExamInputSchema } from './TagUpdateWithoutPracticeExamInputSchema';
import { TagUncheckedUpdateWithoutPracticeExamInputSchema } from './TagUncheckedUpdateWithoutPracticeExamInputSchema';

export const TagUpdateWithWhereUniqueWithoutPracticeExamInputSchema: z.ZodType<Prisma.TagUpdateWithWhereUniqueWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TagUpdateWithoutPracticeExamInputSchema),z.lazy(() => TagUncheckedUpdateWithoutPracticeExamInputSchema) ]),
}).strict();

export default TagUpdateWithWhereUniqueWithoutPracticeExamInputSchema;
