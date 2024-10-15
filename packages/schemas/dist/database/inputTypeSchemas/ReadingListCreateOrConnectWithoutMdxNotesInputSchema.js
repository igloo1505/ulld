import { z } from 'zod';
import { ReadingListWhereUniqueInputSchema } from './ReadingListWhereUniqueInputSchema.js';
import { ReadingListCreateWithoutMdxNotesInputSchema } from './ReadingListCreateWithoutMdxNotesInputSchema.js';
import { ReadingListUncheckedCreateWithoutMdxNotesInputSchema } from './ReadingListUncheckedCreateWithoutMdxNotesInputSchema.js';
export const ReadingListCreateOrConnectWithoutMdxNotesInputSchema = z.object({
    where: z.lazy(() => ReadingListWhereUniqueInputSchema),
    create: z.union([z.lazy(() => ReadingListCreateWithoutMdxNotesInputSchema), z.lazy(() => ReadingListUncheckedCreateWithoutMdxNotesInputSchema)]),
}).strict();
export default ReadingListCreateOrConnectWithoutMdxNotesInputSchema;
