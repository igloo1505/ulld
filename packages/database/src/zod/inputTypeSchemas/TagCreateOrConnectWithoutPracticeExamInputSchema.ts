import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';
import { TagCreateWithoutPracticeExamInputSchema } from './TagCreateWithoutPracticeExamInputSchema';
import { TagUncheckedCreateWithoutPracticeExamInputSchema } from './TagUncheckedCreateWithoutPracticeExamInputSchema';

export const TagCreateOrConnectWithoutPracticeExamInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutPracticeExamInputSchema),z.lazy(() => TagUncheckedCreateWithoutPracticeExamInputSchema) ]),
}).strict();

export default TagCreateOrConnectWithoutPracticeExamInputSchema;
