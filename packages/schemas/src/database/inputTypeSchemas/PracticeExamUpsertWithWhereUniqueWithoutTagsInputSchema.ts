import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema';
import { PracticeExamUpdateWithoutTagsInputSchema } from './PracticeExamUpdateWithoutTagsInputSchema';
import { PracticeExamUncheckedUpdateWithoutTagsInputSchema } from './PracticeExamUncheckedUpdateWithoutTagsInputSchema';
import { PracticeExamCreateWithoutTagsInputSchema } from './PracticeExamCreateWithoutTagsInputSchema';
import { PracticeExamUncheckedCreateWithoutTagsInputSchema } from './PracticeExamUncheckedCreateWithoutTagsInputSchema';

export const PracticeExamUpsertWithWhereUniqueWithoutTagsInputSchema: z.ZodType<Prisma.PracticeExamUpsertWithWhereUniqueWithoutTagsInput> = z.object({
  where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PracticeExamUpdateWithoutTagsInputSchema),z.lazy(() => PracticeExamUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutTagsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default PracticeExamUpsertWithWhereUniqueWithoutTagsInputSchema;
