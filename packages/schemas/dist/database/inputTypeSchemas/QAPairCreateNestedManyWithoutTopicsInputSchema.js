import { z } from 'zod';
import { QAPairCreateWithoutTopicsInputSchema } from './QAPairCreateWithoutTopicsInputSchema.js';
import { QAPairUncheckedCreateWithoutTopicsInputSchema } from './QAPairUncheckedCreateWithoutTopicsInputSchema.js';
import { QAPairCreateOrConnectWithoutTopicsInputSchema } from './QAPairCreateOrConnectWithoutTopicsInputSchema.js';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema.js';
export const QAPairCreateNestedManyWithoutTopicsInputSchema = z.object({
    create: z.union([z.lazy(() => QAPairCreateWithoutTopicsInputSchema), z.lazy(() => QAPairCreateWithoutTopicsInputSchema).array(), z.lazy(() => QAPairUncheckedCreateWithoutTopicsInputSchema), z.lazy(() => QAPairUncheckedCreateWithoutTopicsInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => QAPairCreateOrConnectWithoutTopicsInputSchema), z.lazy(() => QAPairCreateOrConnectWithoutTopicsInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => QAPairWhereUniqueInputSchema), z.lazy(() => QAPairWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default QAPairCreateNestedManyWithoutTopicsInputSchema;
