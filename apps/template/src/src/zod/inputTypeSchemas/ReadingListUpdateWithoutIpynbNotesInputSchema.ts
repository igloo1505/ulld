import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BibEntryUpdateManyWithoutReadingListNestedInputSchema } from './BibEntryUpdateManyWithoutReadingListNestedInputSchema';
import { MdxNoteUpdateManyWithoutReadingListNestedInputSchema } from './MdxNoteUpdateManyWithoutReadingListNestedInputSchema';

export const ReadingListUpdateWithoutIpynbNotesInputSchema: z.ZodType<Prisma.ReadingListUpdateWithoutIpynbNotesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUpdate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bibEntries: z.lazy(() => BibEntryUpdateManyWithoutReadingListNestedInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteUpdateManyWithoutReadingListNestedInputSchema).optional()
}).strict();

export default ReadingListUpdateWithoutIpynbNotesInputSchema;
