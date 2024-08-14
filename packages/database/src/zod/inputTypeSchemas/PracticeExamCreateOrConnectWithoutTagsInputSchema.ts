import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema';
import { PracticeExamCreateWithoutTagsInputSchema } from './PracticeExamCreateWithoutTagsInputSchema';
import { PracticeExamUncheckedCreateWithoutTagsInputSchema } from './PracticeExamUncheckedCreateWithoutTagsInputSchema';

export const PracticeExamCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.PracticeExamCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PracticeExamCreateWithoutTagsInputSchema),z.lazy(() => PracticeExamUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default PracticeExamCreateOrConnectWithoutTagsInputSchema;
