import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema.js';
import { IpynbUncheckedUpdateManyWithoutSequentialListNestedInputSchema } from './IpynbUncheckedUpdateManyWithoutSequentialListNestedInputSchema.js';
export const SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema: z.ZodType<Prisma.SequentialNoteListUncheckedUpdateWithoutMdxNoteInput> = z.object({
  sequentialKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Ipynb: z.lazy(() => IpynbUncheckedUpdateManyWithoutSequentialListNestedInputSchema).optional()
}).strict();
export default SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema;