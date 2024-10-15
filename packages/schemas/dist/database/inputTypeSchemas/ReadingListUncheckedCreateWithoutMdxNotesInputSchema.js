import { z } from 'zod';
import { BibEntryUncheckedCreateNestedManyWithoutReadingListInputSchema } from './BibEntryUncheckedCreateNestedManyWithoutReadingListInputSchema.js';
import { IpynbUncheckedCreateNestedManyWithoutReadingListInputSchema } from './IpynbUncheckedCreateNestedManyWithoutReadingListInputSchema.js';
export const ReadingListUncheckedCreateWithoutMdxNotesInputSchema = z.object({
    name: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    lastUpdate: z.coerce.date().optional(),
    bibEntries: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutReadingListInputSchema).optional(),
    ipynbNotes: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutReadingListInputSchema).optional()
}).strict();
export default ReadingListUncheckedCreateWithoutMdxNotesInputSchema;
