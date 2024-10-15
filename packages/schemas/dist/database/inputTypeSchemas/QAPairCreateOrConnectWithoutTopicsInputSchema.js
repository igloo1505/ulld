import { z } from 'zod';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema.js';
import { QAPairCreateWithoutTopicsInputSchema } from './QAPairCreateWithoutTopicsInputSchema.js';
import { QAPairUncheckedCreateWithoutTopicsInputSchema } from './QAPairUncheckedCreateWithoutTopicsInputSchema.js';
export const QAPairCreateOrConnectWithoutTopicsInputSchema = z.object({
    where: z.lazy(() => QAPairWhereUniqueInputSchema),
    create: z.union([z.lazy(() => QAPairCreateWithoutTopicsInputSchema), z.lazy(() => QAPairUncheckedCreateWithoutTopicsInputSchema)]),
}).strict();
export default QAPairCreateOrConnectWithoutTopicsInputSchema;
