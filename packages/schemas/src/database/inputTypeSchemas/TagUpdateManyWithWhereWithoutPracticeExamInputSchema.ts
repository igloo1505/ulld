import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema';
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema';
import { TagUncheckedUpdateManyWithoutPracticeExamInputSchema } from './TagUncheckedUpdateManyWithoutPracticeExamInputSchema';

export const TagUpdateManyWithWhereWithoutPracticeExamInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutPracticeExamInputSchema) ]),
}).strict();

export default TagUpdateManyWithWhereWithoutPracticeExamInputSchema;
