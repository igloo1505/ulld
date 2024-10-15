import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteCreateNestedManyWithoutReadingListInputSchema } from './MdxNoteCreateNestedManyWithoutReadingListInputSchema.js';
import { IpynbCreateNestedManyWithoutReadingListInputSchema } from './IpynbCreateNestedManyWithoutReadingListInputSchema.js';
export const ReadingListCreateWithoutBibEntriesInputSchema: z.ZodType<Prisma.ReadingListCreateWithoutBibEntriesInput> = z.object({
  name: z.string(),
  description: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastUpdate: z.coerce.date().optional(),
  mdxNotes: z.lazy(() => MdxNoteCreateNestedManyWithoutReadingListInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbCreateNestedManyWithoutReadingListInputSchema).optional()
}).strict();
export default ReadingListCreateWithoutBibEntriesInputSchema;