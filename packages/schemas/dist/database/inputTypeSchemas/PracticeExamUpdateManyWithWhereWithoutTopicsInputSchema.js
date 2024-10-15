import { z } from 'zod';
import { PracticeExamScalarWhereInputSchema } from './PracticeExamScalarWhereInputSchema.js';
import { PracticeExamUpdateManyMutationInputSchema } from './PracticeExamUpdateManyMutationInputSchema.js';
import { PracticeExamUncheckedUpdateManyWithoutTopicsInputSchema } from './PracticeExamUncheckedUpdateManyWithoutTopicsInputSchema.js';
export const PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema = z.object({
    where: z.lazy(() => PracticeExamScalarWhereInputSchema),
    data: z.union([z.lazy(() => PracticeExamUpdateManyMutationInputSchema), z.lazy(() => PracticeExamUncheckedUpdateManyWithoutTopicsInputSchema)]),
}).strict();
export default PracticeExamUpdateManyWithWhereWithoutTopicsInputSchema;
