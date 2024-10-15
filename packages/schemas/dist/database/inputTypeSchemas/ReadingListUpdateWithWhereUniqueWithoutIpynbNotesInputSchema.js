import { z } from 'zod';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema.js';
import { ReadingListUpdateWithoutIpynbNotesInputSchema } from './ReadingListUpdateWithoutIpynbNotesInputSchema.js';
import { ReadingListUncheckedUpdateWithoutIpynbNotesInputSchema } from './ReadingListUncheckedUpdateWithoutIpynbNotesInputSchema.js';
export const ReadingListUpdateWithWhereUniqueWithoutIpynbNotesInputSchema = z.object({
    where: z.lazy(() => ReadingListWhereUniqueInputSchema),
    data: z.union([z.lazy(() => ReadingListUpdateWithoutIpynbNotesInputSchema), z.lazy(() => ReadingListUncheckedUpdateWithoutIpynbNotesInputSchema)]),
}).strict();
export default ReadingListUpdateWithWhereUniqueWithoutIpynbNotesInputSchema;
