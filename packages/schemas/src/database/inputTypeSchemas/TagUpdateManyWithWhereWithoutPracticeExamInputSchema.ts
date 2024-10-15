import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { TagScalarWhereInputSchema } from './TagScalarWhereInputSchema.js';
import { TagUpdateManyMutationInputSchema } from './TagUpdateManyMutationInputSchema.js';
import { TagUncheckedUpdateManyWithoutPracticeExamInputSchema } from './TagUncheckedUpdateManyWithoutPracticeExamInputSchema.js';
export const TagUpdateManyWithWhereWithoutPracticeExamInputSchema: z.ZodType<Prisma.TagUpdateManyWithWhereWithoutPracticeExamInput> = z.object({
  where: z.lazy(() => TagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TagUpdateManyMutationInputSchema),z.lazy(() => TagUncheckedUpdateManyWithoutPracticeExamInputSchema) ]),
}).strict();
export default TagUpdateManyWithWhereWithoutPracticeExamInputSchema;