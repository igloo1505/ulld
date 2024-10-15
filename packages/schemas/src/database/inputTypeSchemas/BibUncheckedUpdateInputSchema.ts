import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema.js';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema.js';
import { BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema } from './BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema.js';
export const BibUncheckedUpdateInputSchema: z.ZodType<Prisma.BibUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  filename: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  firstSync: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  lastSync: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  entries: z.lazy(() => BibEntryUncheckedUpdateManyWithoutBibNestedInputSchema).optional()
}).strict();
export default BibUncheckedUpdateInputSchema;