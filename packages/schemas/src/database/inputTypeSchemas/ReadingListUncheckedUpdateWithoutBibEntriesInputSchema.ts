import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MdxNoteUncheckedUpdateManyWithoutReadingListNestedInputSchema } from './MdxNoteUncheckedUpdateManyWithoutReadingListNestedInputSchema';
import { IpynbUncheckedUpdateManyWithoutReadingListNestedInputSchema } from './IpynbUncheckedUpdateManyWithoutReadingListNestedInputSchema';

export const ReadingListUncheckedUpdateWithoutBibEntriesInputSchema: z.ZodType<Prisma.ReadingListUncheckedUpdateWithoutBibEntriesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUpdate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mdxNotes: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutReadingListNestedInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUncheckedUpdateManyWithoutReadingListNestedInputSchema).optional()
}).strict();

export default ReadingListUncheckedUpdateWithoutBibEntriesInputSchema;