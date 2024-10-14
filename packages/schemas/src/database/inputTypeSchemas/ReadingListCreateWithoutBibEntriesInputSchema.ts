import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateNestedManyWithoutReadingListInputSchema } from './MdxNoteCreateNestedManyWithoutReadingListInputSchema';
import { IpynbCreateNestedManyWithoutReadingListInputSchema } from './IpynbCreateNestedManyWithoutReadingListInputSchema';

export const ReadingListCreateWithoutBibEntriesInputSchema: z.ZodType<Prisma.ReadingListCreateWithoutBibEntriesInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  mdxNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutReadingListInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbCreateNestedManyWithoutReadingListInputSchema).optional()
}).strict();

export default ReadingListCreateWithoutBibEntriesInputSchema;
