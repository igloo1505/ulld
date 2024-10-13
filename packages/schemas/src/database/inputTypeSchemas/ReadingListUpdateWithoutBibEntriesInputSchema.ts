import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from '../StringFieldUpdateOperationsInputSchema.js';
import { NullableStringFieldUpdateOperationsInputSchema } from '../NullableStringFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from '../DateTimeFieldUpdateOperationsInputSchema.js';
import { MdxNoteUpdateManyWithoutReadingListNestedInputSchema } from '../MdxNoteUpdateManyWithoutReadingListNestedInputSchema.js';
import { IpynbUpdateManyWithoutReadingListNestedInputSchema } from '../IpynbUpdateManyWithoutReadingListNestedInputSchema.js';
export const ReadingListUpdateWithoutBibEntriesInputSchema: z.ZodType<Prisma.ReadingListUpdateWithoutBibEntriesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastUpdate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  mdxNotes: z.lazy(() => MdxNoteUpdateManyWithoutReadingListNestedInputSchema).optional(),
  ipynbNotes: z.lazy(() => IpynbUpdateManyWithoutReadingListNestedInputSchema).optional()
}).strict();
export default ReadingListUpdateWithoutBibEntriesInputSchema;