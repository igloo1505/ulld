import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const SequentialNoteListUpdateManyMutationInputSchema: z.ZodType<Prisma.SequentialNoteListUpdateManyMutationInput> = z.object({
  sequentialKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default SequentialNoteListUpdateManyMutationInputSchema;
