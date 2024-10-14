import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryUncheckedCreateNestedManyWithoutReadingListInputSchema } from './BibEntryUncheckedCreateNestedManyWithoutReadingListInputSchema';
import { IpynbUncheckedCreateNestedManyWithoutReadingListInputSchema } from './IpynbUncheckedCreateNestedManyWithoutReadingListInputSchema';

export const ReadingListUncheckedCreateWithoutMdxNotesInputSchema: z.ZodType<Prisma.ReadingListUncheckedCreateWithoutMdxNotesInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutReadingListInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutReadingListInputSchema).optional()
}).strict();

export default ReadingListUncheckedCreateWithoutMdxNotesInputSchema;
