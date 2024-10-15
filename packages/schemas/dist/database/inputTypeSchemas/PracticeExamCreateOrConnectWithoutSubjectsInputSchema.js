import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema.js';
import { PracticeExamCreateWithoutSubjectsInputSchema } from './PracticeExamCreateWithoutSubjectsInputSchema.js';
import { PracticeExamUncheckedCreateWithoutSubjectsInputSchema } from './PracticeExamUncheckedCreateWithoutSubjectsInputSchema.js';
export const PracticeExamCreateOrConnectWithoutSubjectsInputSchema = z.object({
    where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
    create: z.union([z.lazy(() => PracticeExamCreateWithoutSubjectsInputSchema), z.lazy(() => PracticeExamUncheckedCreateWithoutSubjectsInputSchema)]),
}).strict();
export default PracticeExamCreateOrConnectWithoutSubjectsInputSchema;
