import { z } from 'zod';
import { ReadingListScalarWhereInputSchema } from './ReadingListScalarWhereInputSchema.js';
import { ReadingListUpdateManyMutationInputSchema } from './ReadingListUpdateManyMutationInputSchema.js';
import { ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema } from './ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema.js';
export const ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema = z.object({
    where: z.lazy(() => ReadingListScalarWhereInputSchema),
    data: z.union([z.lazy(() => ReadingListUpdateManyMutationInputSchema), z.lazy(() => ReadingListUncheckedUpdateManyWithoutMdxNotesInputSchema)]),
}).strict();
export default ReadingListUpdateManyWithWhereWithoutMdxNotesInputSchema;
