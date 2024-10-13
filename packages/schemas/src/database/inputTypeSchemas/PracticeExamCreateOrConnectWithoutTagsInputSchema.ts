import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from '../PracticeExamWhereUniqueInputSchema.js';
import { PracticeExamCreateWithoutTagsInputSchema } from '../PracticeExamCreateWithoutTagsInputSchema.js';
import { PracticeExamUncheckedCreateWithoutTagsInputSchema } from '../PracticeExamUncheckedCreateWithoutTagsInputSchema.js';
export const PracticeExamCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.PracticeExamCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutTagsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();
export default PracticeExamCreateOrConnectWithoutTagsInputSchema;