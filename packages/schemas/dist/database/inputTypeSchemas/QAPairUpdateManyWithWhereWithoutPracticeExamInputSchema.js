import { z } from 'zod';
import { QAPairScalarWhereInputSchema } from './QAPairScalarWhereInputSchema.js';
import { QAPairUpdateManyMutationInputSchema } from './QAPairUpdateManyMutationInputSchema.js';
import { QAPairUncheckedUpdateManyWithoutPracticeExamInputSchema } from './QAPairUncheckedUpdateManyWithoutPracticeExamInputSchema.js';
export const QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema = z.object({
    where: z.lazy(() => QAPairScalarWhereInputSchema),
    data: z.union([z.lazy(() => QAPairUpdateManyMutationInputSchema), z.lazy(() => QAPairUncheckedUpdateManyWithoutPracticeExamInputSchema)]),
}).strict();
export default QAPairUpdateManyWithWhereWithoutPracticeExamInputSchema;
