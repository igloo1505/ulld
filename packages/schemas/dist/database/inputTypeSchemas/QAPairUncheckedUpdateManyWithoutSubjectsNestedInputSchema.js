import { z } from 'zod';
import { QAPairCreateWithoutSubjectsInputSchema } from './QAPairCreateWithoutSubjectsInputSchema.js';
import { QAPairUncheckedCreateWithoutSubjectsInputSchema } from './QAPairUncheckedCreateWithoutSubjectsInputSchema.js';
import { QAPairCreateOrConnectWithoutSubjectsInputSchema } from './QAPairCreateOrConnectWithoutSubjectsInputSchema.js';
import { QAPairUpsertWithWhereUniqueWithoutSubjectsInputSchema } from './QAPairUpsertWithWhereUniqueWithoutSubjectsInputSchema.js';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema.js';
import { QAPairUpdateWithWhereUniqueWithoutSubjectsInputSchema } from './QAPairUpdateWithWhereUniqueWithoutSubjectsInputSchema.js';
import { QAPairUpdateManyWithWhereWithoutSubjectsInputSchema } from './QAPairUpdateManyWithWhereWithoutSubjectsInputSchema.js';
import { QAPairScalarWhereInputSchema } from './QAPairScalarWhereInputSchema.js';
export const QAPairUncheckedUpdateManyWithoutSubjectsNestedInputSchema = z.object({
    create: z.union([z.lazy(() => QAPairCreateWithoutSubjectsInputSchema), z.lazy(() => QAPairCreateWithoutSubjectsInputSchema).array(), z.lazy(() => QAPairUncheckedCreateWithoutSubjectsInputSchema), z.lazy(() => QAPairUncheckedCreateWithoutSubjectsInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => QAPairCreateOrConnectWithoutSubjectsInputSchema), z.lazy(() => QAPairCreateOrConnectWithoutSubjectsInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => QAPairUpsertWithWhereUniqueWithoutSubjectsInputSchema), z.lazy(() => QAPairUpsertWithWhereUniqueWithoutSubjectsInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => QAPairWhereUniqueInputSchema), z.lazy(() => QAPairWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => QAPairWhereUniqueInputSchema), z.lazy(() => QAPairWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => QAPairWhereUniqueInputSchema), z.lazy(() => QAPairWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => QAPairWhereUniqueInputSchema), z.lazy(() => QAPairWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => QAPairUpdateWithWhereUniqueWithoutSubjectsInputSchema), z.lazy(() => QAPairUpdateWithWhereUniqueWithoutSubjectsInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => QAPairUpdateManyWithWhereWithoutSubjectsInputSchema), z.lazy(() => QAPairUpdateManyWithWhereWithoutSubjectsInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => QAPairScalarWhereInputSchema), z.lazy(() => QAPairScalarWhereInputSchema).array()]).optional(),
}).strict();
export default QAPairUncheckedUpdateManyWithoutSubjectsNestedInputSchema;
