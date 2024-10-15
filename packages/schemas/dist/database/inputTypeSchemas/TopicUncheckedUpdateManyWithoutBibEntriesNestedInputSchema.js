import { z } from 'zod';
import { TopicCreateWithoutBibEntriesInputSchema } from './TopicCreateWithoutBibEntriesInputSchema.js';
import { TopicUncheckedCreateWithoutBibEntriesInputSchema } from './TopicUncheckedCreateWithoutBibEntriesInputSchema.js';
import { TopicCreateOrConnectWithoutBibEntriesInputSchema } from './TopicCreateOrConnectWithoutBibEntriesInputSchema.js';
import { TopicUpsertWithWhereUniqueWithoutBibEntriesInputSchema } from './TopicUpsertWithWhereUniqueWithoutBibEntriesInputSchema.js';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
import { TopicUpdateWithWhereUniqueWithoutBibEntriesInputSchema } from './TopicUpdateWithWhereUniqueWithoutBibEntriesInputSchema.js';
import { TopicUpdateManyWithWhereWithoutBibEntriesInputSchema } from './TopicUpdateManyWithWhereWithoutBibEntriesInputSchema.js';
import { TopicScalarWhereInputSchema } from './TopicScalarWhereInputSchema.js';
export const TopicUncheckedUpdateManyWithoutBibEntriesNestedInputSchema = z.object({
    create: z.union([z.lazy(() => TopicCreateWithoutBibEntriesInputSchema), z.lazy(() => TopicCreateWithoutBibEntriesInputSchema).array(), z.lazy(() => TopicUncheckedCreateWithoutBibEntriesInputSchema), z.lazy(() => TopicUncheckedCreateWithoutBibEntriesInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => TopicCreateOrConnectWithoutBibEntriesInputSchema), z.lazy(() => TopicCreateOrConnectWithoutBibEntriesInputSchema).array()]).optional(),
    upsert: z.union([z.lazy(() => TopicUpsertWithWhereUniqueWithoutBibEntriesInputSchema), z.lazy(() => TopicUpsertWithWhereUniqueWithoutBibEntriesInputSchema).array()]).optional(),
    set: z.union([z.lazy(() => TopicWhereUniqueInputSchema), z.lazy(() => TopicWhereUniqueInputSchema).array()]).optional(),
    disconnect: z.union([z.lazy(() => TopicWhereUniqueInputSchema), z.lazy(() => TopicWhereUniqueInputSchema).array()]).optional(),
    delete: z.union([z.lazy(() => TopicWhereUniqueInputSchema), z.lazy(() => TopicWhereUniqueInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => TopicWhereUniqueInputSchema), z.lazy(() => TopicWhereUniqueInputSchema).array()]).optional(),
    update: z.union([z.lazy(() => TopicUpdateWithWhereUniqueWithoutBibEntriesInputSchema), z.lazy(() => TopicUpdateWithWhereUniqueWithoutBibEntriesInputSchema).array()]).optional(),
    updateMany: z.union([z.lazy(() => TopicUpdateManyWithWhereWithoutBibEntriesInputSchema), z.lazy(() => TopicUpdateManyWithWhereWithoutBibEntriesInputSchema).array()]).optional(),
    deleteMany: z.union([z.lazy(() => TopicScalarWhereInputSchema), z.lazy(() => TopicScalarWhereInputSchema).array()]).optional(),
}).strict();
export default TopicUncheckedUpdateManyWithoutBibEntriesNestedInputSchema;
