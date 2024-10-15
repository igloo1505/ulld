import { z } from 'zod';
import { PracticeExamScalarWhereInputSchema } from './PracticeExamScalarWhereInputSchema.js';
import { PracticeExamUpdateManyMutationInputSchema } from './PracticeExamUpdateManyMutationInputSchema.js';
import { PracticeExamUncheckedUpdateManyWithoutSubjectsInputSchema } from './PracticeExamUncheckedUpdateManyWithoutSubjectsInputSchema.js';
export const PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema = z.object({
    where: z.lazy(() => PracticeExamScalarWhereInputSchema),
    data: z.union([z.lazy(() => PracticeExamUpdateManyMutationInputSchema), z.lazy(() => PracticeExamUncheckedUpdateManyWithoutSubjectsInputSchema)]),
}).strict();
export default PracticeExamUpdateManyWithWhereWithoutSubjectsInputSchema;
