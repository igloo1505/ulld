import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteUncheckedCreateNestedManyWithoutReadingListInputSchema } from './MdxNoteUncheckedCreateNestedManyWithoutReadingListInputSchema';
import { IpynbUncheckedCreateNestedManyWithoutReadingListInputSchema } from './IpynbUncheckedCreateNestedManyWithoutReadingListInputSchema';

export const ReadingListUncheckedCreateWithoutBibEntriesInputSchema: z.ZodType<Prisma.ReadingListUncheckedCreateWithoutBibEntriesInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  mdxNotes: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutReadingListInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutReadingListInputSchema).optional()
}).strict();

export default ReadingListUncheckedCreateWithoutBibEntriesInputSchema;
