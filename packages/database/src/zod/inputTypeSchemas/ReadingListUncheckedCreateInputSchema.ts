import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryUncheckedCreateNestedManyWithoutReadingListInputSchema } from './BibEntryUncheckedCreateNestedManyWithoutReadingListInputSchema';
import { MdxNoteUncheckedCreateNestedManyWithoutReadingListInputSchema } from './MdxNoteUncheckedCreateNestedManyWithoutReadingListInputSchema';
import { IpynbUncheckedCreateNestedManyWithoutReadingListInputSchema } from './IpynbUncheckedCreateNestedManyWithoutReadingListInputSchema';

export const ReadingListUncheckedCreateInputSchema: z.ZodType<Prisma.ReadingListUncheckedCreateInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutReadingListInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutReadingListInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutReadingListInputSchema).optional()
}).strict();

export default ReadingListUncheckedCreateInputSchema;
