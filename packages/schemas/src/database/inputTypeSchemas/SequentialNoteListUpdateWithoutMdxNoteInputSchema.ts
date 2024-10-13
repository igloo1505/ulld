import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from '../StringFieldUpdateOperationsInputSchema.js';
import { IpynbUpdateManyWithoutSequentialListNestedInputSchema } from '../IpynbUpdateManyWithoutSequentialListNestedInputSchema.js';
export const SequentialNoteListUpdateWithoutMdxNoteInputSchema: z.ZodType<Prisma.SequentialNoteListUpdateWithoutMdxNoteInput> = z.object({
  sequentialKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Ipynb: z.lazy(() => IpynbUpdateManyWithoutSequentialListNestedInputSchema).optional()
}).strict();
export default SequentialNoteListUpdateWithoutMdxNoteInputSchema;