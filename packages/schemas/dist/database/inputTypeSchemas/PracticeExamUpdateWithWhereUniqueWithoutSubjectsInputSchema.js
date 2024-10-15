import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema.js';
import { PracticeExamUpdateWithoutSubjectsInputSchema } from './PracticeExamUpdateWithoutSubjectsInputSchema.js';
import { PracticeExamUncheckedUpdateWithoutSubjectsInputSchema } from './PracticeExamUncheckedUpdateWithoutSubjectsInputSchema.js';
export const PracticeExamUpdateWithWhereUniqueWithoutSubjectsInputSchema = z.object({
    where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
    data: z.union([z.lazy(() => PracticeExamUpdateWithoutSubjectsInputSchema), z.lazy(() => PracticeExamUncheckedUpdateWithoutSubjectsInputSchema)]),
}).strict();
export default PracticeExamUpdateWithWhereUniqueWithoutSubjectsInputSchema;
