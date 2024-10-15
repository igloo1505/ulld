import { z } from 'zod';
import { TopicCreateWithoutToDoInputSchema } from './TopicCreateWithoutToDoInputSchema.js';
import { TopicUncheckedCreateWithoutToDoInputSchema } from './TopicUncheckedCreateWithoutToDoInputSchema.js';
import { TopicCreateOrConnectWithoutToDoInputSchema } from './TopicCreateOrConnectWithoutToDoInputSchema.js';
import { TopicUpsertWithWhereUniqueWithoutToDoInputSchema } from './TopicUpsertWithWhereUniqueWithoutToDoInputSchema.js';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithWhereUniqueWithoutToDoInputSchema } from './TopicUpdateWithWhereUniqueWithoutToDoInputSchema.js';
import { TopicUpdateManyWithWhereWithoutToDoInputSchema } from './TopicUpdateManyWithWhereWithoutToDoInputSchema.js';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema.js';
export const TopicUncheckedUpdateManyWithoutToDoNestedInputSchema = z.object({
    create: z.union([z.lazy(() => TopicCreateWithoutToDoInputSchema), z.lazy(() => TopicCreateWithoutToDoInputSchema).array(), z.lazy(() => TopicUncheckedCreateWithoutToDoInputSchema), z.lazy(() => TopicUncheckedCreateWithoutToDoInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => TopicCreateOrConnectWithoutToDoInputSchema), z.lazy(() => TopicCreateOrConnectWithoutToDoInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => TopicUpsertWithWhereUniqueWithoutToDoInputSchema), z.lazy(() => TopicUpsertWithWhereUniqueWithoutToDoInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => TopicWhereUniqueInputSchema), z.lazy(() => TopicWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => TopicWhereUniqueInputSchema), z.lazy(() => TopicWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => TopicWhereUniqueInputSchema), z.lazy(() => TopicWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => TopicWhereUniqueInputSchema), z.lazy(() => TopicWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => TopicUpdateWithWhereUniqueWithoutToDoInputSchema), z.lazy(() => TopicUpdateWithWhereUniqueWithoutToDoInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => TopicUpdateManyWithWhereWithoutToDoInputSchema), z.lazy(() => TopicUpdateManyWithWhereWithoutToDoInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => TopicScalarWhereInputSchema), z.lazy(() => TopicScalarWhereInputSchema).array()]).optional(),
}).strict();
export default TopicUncheckedUpdateManyWithoutToDoNestedInputSchema;
