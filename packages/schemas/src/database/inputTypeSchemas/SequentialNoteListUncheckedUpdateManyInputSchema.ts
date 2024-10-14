import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const SequentialNoteListUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SequentialNoteListUncheckedUpdateManyInput> = z.object({
  sequentialKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default SequentialNoteListUncheckedUpdateManyInputSchema;
