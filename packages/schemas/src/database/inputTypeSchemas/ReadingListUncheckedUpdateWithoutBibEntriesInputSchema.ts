import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { MdxNoteUncheckedUpdateManyWithoutReadingListNestedInputSchema } from './MdxNoteUncheckedUpdateManyWithoutReadingListNestedInputSchema.js';
import { IpynbUncheckedUpdateManyWithoutReadingListNestedInputSchema } from './IpynbUncheckedUpdateManyWithoutReadingListNestedInputSchema.js';
export const ReadingListUncheckedUpdateWithoutBibEntriesInputSchema: z.ZodType<Prisma.ReadingListUncheckedUpdateWithoutBibEntriesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUpdate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mdxNotes: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutReadingListNestedInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedUpdateManyWithoutReadingListNestedInputSchema).optional()
}).strict();
export default ReadingListUncheckedUpdateWithoutBibEntriesInputSchema;