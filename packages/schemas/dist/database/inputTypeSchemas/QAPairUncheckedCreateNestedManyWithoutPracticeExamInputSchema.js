import { z } from 'zod';
import { QAPairCreateWithoutPracticeExamInputSchema } from './QAPairCreateWithoutPracticeExamInputSchema.js';
import { QAPairUncheckedCreateWithoutPracticeExamInputSchema } from './QAPairUncheckedCreateWithoutPracticeExamInputSchema.js';
import { QAPairCreateOrConnectWithoutPracticeExamInputSchema } from './QAPairCreateOrConnectWithoutPracticeExamInputSchema.js';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema.js';
export const QAPairUncheckedCreateNestedManyWithoutPracticeExamInputSchema = z.object({
    create: z.union([z.lazy(() => QAPairCreateWithoutPracticeExamInputSchema), z.lazy(() => QAPairCreateWithoutPracticeExamInputSchema).array(), z.lazy(() => QAPairUncheckedCreateWithoutPracticeExamInputSchema), z.lazy(() => QAPairUncheckedCreateWithoutPracticeExamInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => QAPairCreateOrConnectWithoutPracticeExamInputSchema), z.lazy(() => QAPairCreateOrConnectWithoutPracticeExamInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => QAPairWhereUniqueInputSchema), z.lazy(() => QAPairWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default QAPairUncheckedCreateNestedManyWithoutPracticeExamInputSchema;
