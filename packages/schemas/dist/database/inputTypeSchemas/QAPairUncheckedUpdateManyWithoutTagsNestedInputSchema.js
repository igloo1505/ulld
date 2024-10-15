import { z } from 'zod';
import { QAPairCreateWithoutTagsInputSchema } from './QAPairCreateWithoutTagsInputSchema.js';
import { QAPairUncheckedCreateWithoutTagsInputSchema } from './QAPairUncheckedCreateWithoutTagsInputSchema.js';
import { QAPairCreateOrConnectWithoutTagsInputSchema } from './QAPairCreateOrConnectWithoutTagsInputSchema.js';
import { QAPairUpsertWithWhereUniqueWithoutTagsInputSchema } from './QAPairUpsertWithWhereUniqueWithoutTagsInputSchema.js';
import { QAPairWhereUniqueInputSchema } from './QAPairWhereUniqueInputSchema.js';
import { QAPairUpdateWithWhereUniqueWithoutTagsInputSchema } from './QAPairUpdateWithWhereUniqueWithoutTagsInputSchema.js';
import { QAPairUpdateManyWithWhereWithoutTagsInputSchema } from './QAPairUpdateManyWithWhereWithoutTagsInputSchema.js';
import { QAPairScalarWhereInputSchema } from './QAPairScalarWhereInputSchema.js';
export const QAPairUncheckedUpdateManyWithoutTagsNestedInputSchema = z.object({
    create: z.union([z.lazy(() => QAPairCreateWithoutTagsInputSchema), z.lazy(() => QAPairCreateWithoutTagsInputSchema).array(), z.lazy(() => QAPairUncheckedCreateWithoutTagsInputSchema), z.lazy(() => QAPairUncheckedCreateWithoutTagsInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => QAPairCreateOrConnectWithoutTagsInputSchema), z.lazy(() => QAPairCreateOrConnectWithoutTagsInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => QAPairUpsertWithWhereUniqueWithoutTagsInputSchema), z.lazy(() => QAPairUpsertWithWhereUniqueWithoutTagsInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => QAPairWhereUniqueInputSchema), z.lazy(() => QAPairWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => QAPairWhereUniqueInputSchema), z.lazy(() => QAPairWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => QAPairWhereUniqueInputSchema), z.lazy(() => QAPairWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => QAPairWhereUniqueInputSchema), z.lazy(() => QAPairWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => QAPairUpdateWithWhereUniqueWithoutTagsInputSchema), z.lazy(() => QAPairUpdateWithWhereUniqueWithoutTagsInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => QAPairUpdateManyWithWhereWithoutTagsInputSchema), z.lazy(() => QAPairUpdateManyWithWhereWithoutTagsInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => QAPairScalarWhereInputSchema), z.lazy(() => QAPairScalarWhereInputSchema).array()]).optional(),
}).strict();
export default QAPairUncheckedUpdateManyWithoutTagsNestedInputSchema;
