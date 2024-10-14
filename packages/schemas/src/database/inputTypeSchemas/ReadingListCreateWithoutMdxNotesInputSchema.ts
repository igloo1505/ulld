import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryCreateNestedManyWithoutReadingListInputSchema } from './BibEntryCreateNestedManyWithoutReadingListInputSchema';
import { IpynbCreateNestedManyWithoutReadingListInputSchema } from './IpynbCreateNestedManyWithoutReadingListInputSchema';

export const ReadingListCreateWithoutMdxNotesInputSchema: z.ZodType<Prisma.ReadingListCreateWithoutMdxNotesInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  bibEntries: z.lazy(() => BibEntryCreateNestedManyWithoutReadingListInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbCreateNestedManyWithoutReadingListInputSchema).optional()
}).strict();

export default ReadingListCreateWithoutMdxNotesInputSchema;
