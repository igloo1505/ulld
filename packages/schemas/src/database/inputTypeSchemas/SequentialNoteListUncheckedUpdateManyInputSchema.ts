import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
export const SequentialNoteListUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SequentialNoteListUncheckedUpdateManyInput> = z.object({
  sequentialKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();
export default SequentialNoteListUncheckedUpdateManyInputSchema;