import { z } from 'zod';
import { TopicCreateWithoutEquationsInputSchema } from './TopicCreateWithoutEquationsInputSchema.js';
import { TopicUncheckedCreateWithoutEquationsInputSchema } from './TopicUncheckedCreateWithoutEquationsInputSchema.js';
import { TopicCreateOrConnectWithoutEquationsInputSchema } from './TopicCreateOrConnectWithoutEquationsInputSchema.js';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
export const TopicCreateNestedManyWithoutEquationsInputSchema = z.object({
    create: z.union([z.lazy(() => TopicCreateWithoutEquationsInputSchema), z.lazy(() => TopicCreateWithoutEquationsInputSchema).array(), z.lazy(() => TopicUncheckedCreateWithoutEquationsInputSchema), z.lazy(() => TopicUncheckedCreateWithoutEquationsInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => TopicCreateOrConnectWithoutEquationsInputSchema), z.lazy(() => TopicCreateOrConnectWithoutEquationsInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => TopicWhereUniqueInputSchema), z.lazy(() => TopicWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default TopicCreateNestedManyWithoutEquationsInputSchema;
