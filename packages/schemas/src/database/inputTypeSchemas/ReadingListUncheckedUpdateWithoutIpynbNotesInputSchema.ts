import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BibEntryUncheckedUpdateManyWithoutReadingListNestedInputSchema } from './BibEntryUncheckedUpdateManyWithoutReadingListNestedInputSchema';
import { MdxNoteUncheckedUpdateManyWithoutReadingListNestedInputSchema } from './MdxNoteUncheckedUpdateManyWithoutReadingListNestedInputSchema';

export const ReadingListUncheckedUpdateWithoutIpynbNotesInputSchema: z.ZodType<Prisma.ReadingListUncheckedUpdateWithoutIpynbNotesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUpdate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedUpdateManyWithoutReadingListNestedInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutReadingListNestedInputSchema).optional()
}).strict();

export default ReadingListUncheckedUpdateWithoutIpynbNotesInputSchema;
