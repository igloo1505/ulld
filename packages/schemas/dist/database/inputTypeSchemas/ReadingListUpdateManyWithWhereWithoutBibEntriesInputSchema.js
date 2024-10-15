import { z } from 'zod';
import { ReadingListScalarWhereInputSchema } from './ReadingListScalarWhereInputSchema.js';
import { ReadingListUpdateManyMutationInputSchema } from './ReadingListUpdateManyMutationInputSchema.js';
import { ReadingListUncheckedUpdateManyWithoutBibEntriesInputSchema } from './ReadingListUncheckedUpdateManyWithoutBibEntriesInputSchema.js';
export const ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema = z.object({
    where: z.lazy(() => ReadingListScalarWhereInputSchema),
    data: z.union([z.lazy(() => ReadingListUpdateManyMutationInputSchema), z.lazy(() => ReadingListUncheckedUpdateManyWithoutBibEntriesInputSchema)]),
}).strict();
export default ReadingListUpdateManyWithWhereWithoutBibEntriesInputSchema;
