import { z } from 'zod';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema.js';
import { ReadingListCreateWithoutIpynbNotesInputSchema } from './ReadingListCreateWithoutIpynbNotesInputSchema.js';
import { ReadingListUncheckedCreateWithoutIpynbNotesInputSchema } from './ReadingListUncheckedCreateWithoutIpynbNotesInputSchema.js';
export const ReadingListCreateOrConnectWithoutIpynbNotesInputSchema = z.object({
    where: z.lazy(() => ReadingListWhereUniqueInputSchema),
    create: z.union([z.lazy(() => ReadingListCreateWithoutIpynbNotesInputSchema), z.lazy(() => ReadingListUncheckedCreateWithoutIpynbNotesInputSchema)]),
}).strict();
export default ReadingListCreateOrConnectWithoutIpynbNotesInputSchema;
