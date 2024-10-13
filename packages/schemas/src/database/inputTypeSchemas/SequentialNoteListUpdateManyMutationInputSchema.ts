import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from '../StringFieldUpdateOperationsInputSchema.js';
export const SequentialNoteListUpdateManyMutationInputSchema: z.ZodType<Prisma.SequentialNoteListUpdateManyMutationInput> = z.object({
  sequentialKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();
export default SequentialNoteListUpdateManyMutationInputSchema;