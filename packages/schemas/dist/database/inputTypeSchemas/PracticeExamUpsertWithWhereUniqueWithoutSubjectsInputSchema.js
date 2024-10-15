import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema.js';
import { PracticeExamUpdateWithoutSubjectsInputSchema } from './PracticeExamUpdateWithoutSubjectsInputSchema.js';
import { PracticeExamUncheckedUpdateWithoutSubjectsInputSchema } from './PracticeExamUncheckedUpdateWithoutSubjectsInputSchema.js';
import { PracticeExamCreateWithoutSubjectsInputSchema } from './PracticeExamCreateWithoutSubjectsInputSchema.js';
import { PracticeExamUncheckedCreateWithoutSubjectsInputSchema } from './PracticeExamUncheckedCreateWithoutSubjectsInputSchema.js';
export const PracticeExamUpsertWithWhereUniqueWithoutSubjectsInputSchema = z.object({
    where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
    update: z.union([z.lazy(() => PracticeExamUpdateWithoutSubjectsInputSchema), z.lazy(() => PracticeExamUncheckedUpdateWithoutSubjectsInputSchema)]),
    create: z.union([z.lazy(() => PracticeExamCreateWithoutSubjectsInputSchema), z.lazy(() => PracticeExamUncheckedCreateWithoutSubjectsInputSchema)]),
}).strict();
export default PracticeExamUpsertWithWhereUniqueWithoutSubjectsInputSchema;
