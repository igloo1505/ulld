import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagWhereUniqueInputSchema } from '../TagWhereUniqueInputSchema.js';
import { TagCreateWithoutPracticeExamInputSchema } from '../TagCreateWithoutPracticeExamInputSchema.js';
import { TagUncheckedCreateWithoutPracticeExamInputSchema } from '../TagUncheckedCreateWithoutPracticeExamInputSchema.js';
export const TagCreateOrConnectWithoutPracticeExamInputSchema: z.ZodType<Prisma.TagCreateOrConnectWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => TagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TagCreateWithoutPracticeExamInputSchema),z.lazy(() => TagUncheckedCreateWithoutPracticeExamInputSchema) ]),
}).strict();
export default TagCreateOrConnectWithoutPracticeExamInputSchema;