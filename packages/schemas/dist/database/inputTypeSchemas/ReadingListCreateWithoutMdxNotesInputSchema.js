import { z } from 'zod';
import { BibEntryCreateNestedManyWithoutReadingListInputSchema } from './BibEntryCreateNestedManyWithoutReadingListInputSchema.js';
import { IpynbCreateNestedManyWithoutReadingListInputSchema } from './IpynbCreateNestedManyWithoutReadingListInputSchema.js';
export const ReadingListCreateWithoutMdxNotesInputSchema = z.object({
    name: z.string(),
    description: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    lastUpdate: z.coerce.date().optional(),
    bibEntries: z.lazy(() => BibEntryCreateNestedManyWithoutReadingListInputSchema).optional(),
    ipynbNotes: z.lazy(() => IpynbCreateNestedManyWithoutReadingListInputSchema).optional()
}).strict();
export default ReadingListCreateWithoutMdxNotesInputSchema;
