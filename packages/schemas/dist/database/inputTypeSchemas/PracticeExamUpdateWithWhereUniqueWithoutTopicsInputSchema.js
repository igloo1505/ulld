import { z } from 'zod';
import { PracticeExamWhereUniqueInputSchema } from './PracticeExamWhereUniqueInputSchema.js';
import { PracticeExamUpdateWithoutTopicsInputSchema } from './PracticeExamUpdateWithoutTopicsInputSchema.js';
import { PracticeExamUncheckedUpdateWithoutTopicsInputSchema } from './PracticeExamUncheckedUpdateWithoutTopicsInputSchema.js';
export const PracticeExamUpdateWithWhereUniqueWithoutTopicsInputSchema = z.object({
    where: z.lazy(() => PracticeExamWhereUniqueInputSchema),
    data: z.union([z.lazy(() => PracticeExamUpdateWithoutTopicsInputSchema), z.lazy(() => PracticeExamUncheckedUpdateWithoutTopicsInputSchema)]),
}).strict();
export default PracticeExamUpdateWithWhereUniqueWithoutTopicsInputSchema;
