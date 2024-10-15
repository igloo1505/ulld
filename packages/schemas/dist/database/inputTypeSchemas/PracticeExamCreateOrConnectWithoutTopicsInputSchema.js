import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema.js';
import { PracticeExamCreateWithoutTopicsInputSchema } from './PracticeExamCreateWithoutTopicsInputSchema.js';
import { PracticeExamUncheckedCreateWithoutTopicsInputSchema } from './PracticeExamUncheckedCreateWithoutTopicsInputSchema.js';
export const PracticeExamCreateOrConnectWithoutTopicsInputSchema = z.object({
    where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
    create: z.union([z.lazy(() => PracticeExamCreateWithoutTopicsInputSchema), z.lazy(() => PracticeExamUncheckedCreateWithoutTopicsInputSchema)]),
}).strict();
export default PracticeExamCreateOrConnectWithoutTopicsInputSchema;
