import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryUncheckedCreateNestedManyWithoutReadingListInputSchema } from './BibEntryUncheckedCreateNestedManyWithoutReadingListInputSchema.js';
import { MdxNoteUncheckedCreateNestedManyWithoutReadingListInputSchema } from './MdxNoteUncheckedCreateNestedManyWithoutReadingListInputSchema.js';
export const ReadingListUncheckedCreateWithoutIpynbNotesInputSchema: z.ZodType<Prisma.ReadingListUncheckedCreateWithoutIpynbNotesInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutReadingListInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutReadingListInputSchema).optional()
}).strict();
export default ReadingListUncheckedCreateWithoutIpynbNotesInputSchema;