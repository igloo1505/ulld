import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema.js';
import { QAPairUpdateWithoutSubjectsInputSchema } from './QAPairUpdateWithoutSubjectsInputSchema.js';
import { QAPairUncheckedUpdateWithoutSubjectsInputSchema } from './QAPairUncheckedUpdateWithoutSubjectsInputSchema.js';
export const QAPairUpdateWithWhereUniqueWithoutSubjectsInputSchema = z.object({
    where: z.lazy(() => QAPairWhereUniqueInputSchema),
    data: z.union([z.lazy(() => QAPairUpdateWithoutSubjectsInputSchema), z.lazy(() => QAPairUncheckedUpdateWithoutSubjectsInputSchema)]),
}).strict();
export default QAPairUpdateWithWhereUniqueWithoutSubjectsInputSchema;
