import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from '../StringFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from '../NullableStringFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from '../DateTimeFieldUpdateOperationsInputSchema.js';
import { BibEntryUncheckedUpdateManyWithoutReadingListNestedInputSchema } from '../BibEntryUncheckedUpdateManyWithoutReadingListNestedInputSchema.js';
import { MdxNoteUncheckedUpdateManyWithoutReadingListNestedInputSchema } from '../MdxNoteUncheckedUpdateManyWithoutReadingListNestedInputSchema.js';
export const ReadingListUncheckedUpdateWithoutIpynbNotesInputSchema: z.ZodType<Prisma.ReadingListUncheckedUpdateWithoutIpynbNotesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUpdate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedUpdateManyWithoutReadingListNestedInputSchema).optional(),
  mdxNotes: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutReadingListNestedInputSchema).optional()
}).strict();
export default ReadingListUncheckedUpdateWithoutIpynbNotesInputSchema;