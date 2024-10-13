import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from '../PracticeExamWhereUniqueInputSchema.js';
import { PracticeExamUpdateWithoutTagsInputSchema } from '../PracticeExamUpdateWithoutTagsInputSchema.js';
import { PracticeExamUncheckedUpdateWithoutTagsInputSchema } from '../PracticeExamUncheckedUpdateWithoutTagsInputSchema.js';
export const PracticeExamUpdateWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.PracticeExamUpdateWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PracticeExamUpdateWithoutTagsInputSchema),z.lazy(() => PracticeExamUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();
export default PracticeExamUpdateWithWhereUniqueWithoutTagsInputSchema;