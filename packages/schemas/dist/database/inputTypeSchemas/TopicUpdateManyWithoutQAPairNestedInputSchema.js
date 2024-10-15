import { z } from 'zod';
import { TopicCreateWithoutQAPairInputSchema } from './TopicCreateWithoutQAPairInputSchema.js';
import { TopicUncheckedCreateWithoutQAPairInputSchema } from './TopicUncheckedCreateWithoutQAPairInputSchema.js';
import { TopicCreateOrConnectWithoutQAPairInputSchema } from './TopicCreateOrConnectWithoutQAPairInputSchema.js';
import { TopicUpsertWithWhereUniqueWithoutQAPairInputSchema } from './TopicUpsertWithWhereUniqueWithoutQAPairInputSchema.js';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithWhereUniqueWithoutQAPairInputSchema } from './TopicUpdateWithWhereUniqueWithoutQAPairInputSchema.js';
import { TopicUpdateManyWithWhereWithoutQAPairInputSchema } from './TopicUpdateManyWithWhereWithoutQAPairInputSchema.js';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema.js';
export const TopicUpdateManyWithoutQAPairNestedInputSchema = z.object({
    create: z.union([z.lazy(() => TopicCreateWithoutQAPairInputSchema), z.lazy(() => TopicCreateWithoutQAPairInputSchema).array(), z.lazy(() => TopicUncheckedCreateWithoutQAPairInputSchema), z.lazy(() => TopicUncheckedCreateWithoutQAPairInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => TopicCreateOrConnectWithoutQAPairInputSchema), z.lazy(() => TopicCreateOrConnectWithoutQAPairInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => TopicUpsertWithWhereUniqueWithoutQAPairInputSchema), z.lazy(() => TopicUpsertWithWhereUniqueWithoutQAPairInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => TopicWhereUniqueInputSchema), z.lazy(() => TopicWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => TopicWhereUniqueInputSchema), z.lazy(() => TopicWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => TopicWhereUniqueInputSchema), z.lazy(() => TopicWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => TopicWhereUniqueInputSchema), z.lazy(() => TopicWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => TopicUpdateWithWhereUniqueWithoutQAPairInputSchema), z.lazy(() => TopicUpdateWithWhereUniqueWithoutQAPairInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => TopicUpdateManyWithWhereWithoutQAPairInputSchema), z.lazy(() => TopicUpdateManyWithWhereWithoutQAPairInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => TopicScalarWhereInputSchema), z.lazy(() => TopicScalarWhereInputSchema).array()]).optional(),
}).strict();
export default TopicUpdateManyWithoutQAPairNestedInputSchema;
