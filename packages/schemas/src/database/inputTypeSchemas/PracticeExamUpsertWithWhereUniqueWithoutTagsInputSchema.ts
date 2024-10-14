import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema.js';
import { PracticeExamUpdateWithoutTagsInputSchema } from './PracticeExamUpdateWithoutTagsInputSchema.js';
import { PracticeExamUncheckedUpdateWithoutTagsInputSchema } from './PracticeExamUncheckedUpdateWithoutTagsInputSchema.js';
import { PracticeExamCreateWithoutTagsInputSchema } from './PracticeExamCreateWithoutTagsInputSchema.js';
import { PracticeExamUncheckedCreateWithoutTagsInputSchema } from './PracticeExamUncheckedCreateWithoutTagsInputSchema.js';
export const PracticeExamUpsertWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.PracticeExamUpsertWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PracticeExamUpdateWithoutTagsInputSchema),z.lazy(() => PracticeExamUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutTagsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();
export default PracticeExamUpsertWithWhereUniqueWithoutTagsInputSchema;