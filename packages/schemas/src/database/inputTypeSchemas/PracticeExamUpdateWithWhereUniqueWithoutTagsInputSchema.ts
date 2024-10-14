import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema';
import { PracticeExamUpdateWithoutTagsInputSchema } from './PracticeExamUpdateWithoutTagsInputSchema';
import { PracticeExamUncheckedUpdateWithoutTagsInputSchema } from './PracticeExamUncheckedUpdateWithoutTagsInputSchema';

export const PracticeExamUpdateWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.PracticeExamUpdateWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PracticeExamUpdateWithoutTagsInputSchema),z.lazy(() => PracticeExamUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default PracticeExamUpdateWithWhereUniqueWithoutTagsInputSchema;
