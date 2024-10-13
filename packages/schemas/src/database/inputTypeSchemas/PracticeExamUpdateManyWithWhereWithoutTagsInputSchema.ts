import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { PracticeExamScalarWhereInputSchema } from '../PracticeExamScalarWhereInputSchema.js';
import { PracticeExamUpdateManyMutationInputSchema } from '../PracticeExamUpdateManyMutationInputSchema.js';
import { PracticeExamUncheckedUpdateManyWithoutTagsInputSchema } from '../PracticeExamUncheckedUpdateManyWithoutTagsInputSchema.js';
export const PracticeExamUpdateManyWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.PracticeExamUpdateManyWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => PracticeExamScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PracticeExamUpdateManyMutationInputSchema),z.lazy(() => PracticeExamUncheckedUpdateManyWithoutTagsInputSchema) ]),
}).strict();
export default PracticeExamUpdateManyWithWhereWithoutTagsInputSchema;