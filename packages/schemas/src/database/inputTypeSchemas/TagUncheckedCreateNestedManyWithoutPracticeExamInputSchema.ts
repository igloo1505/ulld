import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagCreateWithoutPracticeExamInputSchema } from './TagCreateWithoutPracticeExamInputSchema.js';
import { TagUncheckedCreateWithoutPracticeExamInputSchema } from './TagUncheckedCreateWithoutPracticeExamInputSchema.js';
import { TagCreateOrConnectWithoutPracticeExamInputSchema } from './TagCreateOrConnectWithoutPracticeExamInputSchema.js';
import { TagWhereUniqueInputSchema } from './TagWhereUniqueInputSchema.js';
export const TagUncheckedCreateNestedManyWithoutPracticeExamInputSchema: z.ZodType<Prisma.TagUncheckedCreateNestedManyWithoutPracticeExamInput> = z.object({
  create: z.union([ z.lazy(() => TagCreateWithoutPracticeExamInputSchema),z.lazy(() => TagCreateWithoutPracticeExamInputSchema).array(),z.lazy(() => TagUncheckedCreateWithoutPracticeExamInputSchema),z.lazy(() => TagUncheckedCreateWithoutPracticeExamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TagCreateOrConnectWithoutPracticeExamInputSchema),z.lazy(() => TagCreateOrConnectWithoutPracticeExamInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TagWhereUniqueInputSchema),z.lazy(() => TagWhereUniqueInputSchema).array() ]).optional(),
}).strict();
export default TagUncheckedCreateNestedManyWithoutPracticeExamInputSchema;