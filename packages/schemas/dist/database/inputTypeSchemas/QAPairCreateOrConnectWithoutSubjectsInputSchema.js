import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema.js';
import { QAPairCreateWithoutSubjectsInputSchema } from './QAPairCreateWithoutSubjectsInputSchema.js';
import { QAPairUncheckedCreateWithoutSubjectsInputSchema } from './QAPairUncheckedCreateWithoutSubjectsInputSchema.js';
export const QAPairCreateOrConnectWithoutSubjectsInputSchema = z.object({
    where: z.lazy(() => QAPairWhereUniqueInputSchema),
    create: z.union([z.lazy(() => QAPairCreateWithoutSubjectsInputSchema), z.lazy(() => QAPairUncheckedCreateWithoutSubjectsInputSchema)]),
}).strict();
export default QAPairCreateOrConnectWithoutSubjectsInputSchema;
