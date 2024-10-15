import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema.js';
import { QAPairCreateWithoutPracticeExamInputSchema } from './QAPairCreateWithoutPracticeExamInputSchema.js';
import { QAPairUncheckedCreateWithoutPracticeExamInputSchema } from './QAPairUncheckedCreateWithoutPracticeExamInputSchema.js';
export const QAPairCreateOrConnectWithoutPracticeExamInputSchema = z.object({
    where: z.lazy(() => QAPairWhereUniqueInputSchema),
    create: z.union([z.lazy(() => QAPairCreateWithoutPracticeExamInputSchema), z.lazy(() => QAPairUncheckedCreateWithoutPracticeExamInputSchema)]),
}).strict();
export default QAPairCreateOrConnectWithoutPracticeExamInputSchema;
