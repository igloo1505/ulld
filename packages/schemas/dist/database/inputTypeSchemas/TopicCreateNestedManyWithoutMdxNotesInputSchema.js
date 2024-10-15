import { z } from 'zod';
import { TopicCreateWithoutMdxNotesInputSchema } from './TopicCreateWithoutMdxNotesInputSchema.js';
import { TopicUncheckedCreateWithoutMdxNotesInputSchema } from './TopicUncheckedCreateWithoutMdxNotesInputSchema.js';
import { TopicCreateOrConnectWithoutMdxNotesInputSchema } from './TopicCreateOrConnectWithoutMdxNotesInputSchema.js';
import { TopicWhereUniqueInputSchema } from './TopicWhereUniqueInputSchema.js';
export const TopicCreateNestedManyWithoutMdxNotesInputSchema = z.object({
    create: z.union([z.lazy(() => TopicCreateWithoutMdxNotesInputSchema), z.lazy(() => TopicCreateWithoutMdxNotesInputSchema).array(), z.lazy(() => TopicUncheckedCreateWithoutMdxNotesInputSchema), z.lazy(() => TopicUncheckedCreateWithoutMdxNotesInputSchema).array()]).optional(),
    connectOrCreate: z.union([z.lazy(() => TopicCreateOrConnectWithoutMdxNotesInputSchema), z.lazy(() => TopicCreateOrConnectWithoutMdxNotesInputSchema).array()]).optional(),
    connect: z.union([z.lazy(() => TopicWhereUniqueInputSchema), z.lazy(() => TopicWhereUniqueInputSchema).array()]).optional(),
}).strict();
export default TopicCreateNestedManyWithoutMdxNotesInputSchema;
