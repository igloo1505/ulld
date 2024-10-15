import { z } from 'zod';
import { TopicCreateWithoutEquationsInputSchema } from './TopicCreateWithoutEquationsInputSchema.js';
import { TopicUncheckedCreateWithoutEquationsInputSchema } from './TopicUncheckedCreateWithoutEquationsInputSchema.js';
import { TopicCreateOrConnectWithoutEquationsInputSchema } from './TopicCreateOrConnectWithoutEquationsInputSchema.js';
import { TopicUpsertWithWhereUniqueWithoutEquationsInputSchema } from './TopicUpsertWithWhereUniqueWithoutEquationsInputSchema.js';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithWhereUniqueWithoutEquationsInputSchema } from './TopicUpdateWithWhereUniqueWithoutEquationsInputSchema.js';
import { TopicUpdateManyWithWhereWithoutEquationsInputSchema } from './TopicUpdateManyWithWhereWithoutEquationsInputSchema.js';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema.js';
export const TopicUpdateManyWithoutEquationsNestedInputSchema = z.object({
    create: z.union([z.lazy(() => TopicCreateWithoutEquationsInputSchema), z.lazy(() => TopicCreateWithoutEquationsInputSchema).array(), z.lazy(() => TopicUncheckedCreateWithoutEquationsInputSchema), z.lazy(() => TopicUncheckedCreateWithoutEquationsInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => TopicCreateOrConnectWithoutEquationsInputSchema), z.lazy(() => TopicCreateOrConnectWithoutEquationsInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => TopicUpsertWithWhereUniqueWithoutEquationsInputSchema), z.lazy(() => TopicUpsertWithWhereUniqueWithoutEquationsInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => TopicWhereUniqueInputSchema), z.lazy(() => TopicWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => TopicWhereUniqueInputSchema), z.lazy(() => TopicWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => TopicWhereUniqueInputSchema), z.lazy(() => TopicWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => TopicWhereUniqueInputSchema), z.lazy(() => TopicWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => TopicUpdateWithWhereUniqueWithoutEquationsInputSchema), z.lazy(() => TopicUpdateWithWhereUniqueWithoutEquationsInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => TopicUpdateManyWithWhereWithoutEquationsInputSchema), z.lazy(() => TopicUpdateManyWithWhereWithoutEquationsInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => TopicScalarWhereInputSchema), z.lazy(() => TopicScalarWhereInputSchema).array()]).optional(),
}).strict();
export default TopicUpdateManyWithoutEquationsNestedInputSchema;
