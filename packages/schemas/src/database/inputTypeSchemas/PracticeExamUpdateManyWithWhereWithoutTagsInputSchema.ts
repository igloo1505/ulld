import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PracticeExamScalarWhereInputSchema } from './PracticeExamScalarWhereInputSchema';
import { PracticeExamUpdateManyMutationInputSchema } from './PracticeExamUpdateManyMutationInputSchema';
import { PracticeExamUncheckedUpdateManyWithoutTagsInputSchema } from './PracticeExamUncheckedUpdateManyWithoutTagsInputSchema';

export const PracticeExamUpdateManyWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.PracticeExamUpdateManyWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => PracticeExamScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PracticeExamUpdateManyMutationInputSchema),z.lazy(() => PracticeExamUncheckedUpdateManyWithoutTagsInputSchema) ]),
}).strict();

export default PracticeExamUpdateManyWithWhereWithoutTagsInputSchema;
