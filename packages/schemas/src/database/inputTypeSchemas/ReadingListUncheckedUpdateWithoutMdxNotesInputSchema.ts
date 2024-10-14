import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { BibEntryUncheckedUpdateManyWithoutReadingListNestedInputSchema } from './BibEntryUncheckedUpdateManyWithoutReadingListNestedInputSchema.js';
import { IpynbUncheckedUpdateManyWithoutReadingListNestedInputSchema } from './IpynbUncheckedUpdateManyWithoutReadingListNestedInputSchema.js';
export const ReadingListUncheckedUpdateWithoutMdxNotesInputSchema: z.ZodType<Prisma.ReadingListUncheckedUpdateWithoutMdxNotesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUpdate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bibEntries: z.lazy(() => BibEntryUncheckedUpdateManyWithoutReadingListNestedInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedUpdateManyWithoutReadingListNestedInputSchema).optional()
}).strict();
export default ReadingListUncheckedUpdateWithoutMdxNotesInputSchema;