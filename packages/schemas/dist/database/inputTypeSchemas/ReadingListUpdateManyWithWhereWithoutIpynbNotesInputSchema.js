import { z } from 'zod';
import { ReadingListScalarWhereInputSchema } from './ReadingListScalarWhereInputSchema.js';
import { ReadingListUpdateManyMutationInputSchema } from './ReadingListUpdateManyMutationInputSchema.js';
import { ReadingListUncheckedUpdateManyWithoutIpynbNotesInputSchema } from './ReadingListUncheckedUpdateManyWithoutIpynbNotesInputSchema.js';
export const ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema = z.object({
    where: z.lazy(() => ReadingListScalarWhereInputSchema),
    data: z.union([z.lazy(() => ReadingListUpdateManyMutationInputSchema), z.lazy(() => ReadingListUncheckedUpdateManyWithoutIpynbNotesInputSchema)]),
}).strict();
export default ReadingListUpdateManyWithWhereWithoutIpynbNotesInputSchema;
