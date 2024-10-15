import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryCreateNestedManyWithoutReadingListInputSchema } from './BibEntryCreateNestedManyWithoutReadingListInputSchema.js';
import { MdxNoteCreateNestedManyWithoutReadingListInputSchema } from './MdxNoteCreateNestedManyWithoutReadingListInputSchema.js';
export const ReadingListCreateWithoutIpynbNotesInputSchema: z.ZodType<Prisma.ReadingListCreateWithoutIpynbNotesInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  bibEntries: z.lazy(() => BibEntryCreateNestedManyWithoutReadingListInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutReadingListInputSchema).optional()
}).strict();
export default ReadingListCreateWithoutIpynbNotesInputSchema;