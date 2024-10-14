import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagCreateWithoutPracticeExamInputSchema } from './TagCreateWithoutPracticeExamInputSchema';
import { TagUncheckedCreateWithoutPracticeExamInputSchema } from './TagUncheckedCreateWithoutPracticeExamInputSchema';
import { TagCreateOrConnectWithoutPracticeExamInputSchema } from './TagCreateOrConnectWithoutPracticeExamInputSchema';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema';

export const TagCreateNestedManyWithoutPracticeExamInputSchema: z.ZodType<Prisma.TagCreateNestedManyWithoutPracticeExamInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutPracticeExamInputSchema),z.lazy(() => TagCreateWithoutPracticeExamInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutPracticeExamInputSchema),z.lazy(() => TagUncheckedCreateWithoutPracticeExamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutPracticeExamInputSchema),z.lazy(() => TagCreateOrConnectWithoutPracticeExamInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TagCreateNestedManyWithoutPracticeExamInputSchema;
