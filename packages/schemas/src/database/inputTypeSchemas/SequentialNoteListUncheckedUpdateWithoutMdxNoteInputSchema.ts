import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IpynbUncheckedUpdateManyWithoutSequentialListNestedInputSchema } from './IpynbUncheckedUpdateManyWithoutSequentialListNestedInputSchema';

export const SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema: z.ZodType<Prisma.SequentialNoteListUncheckedUpdateWithoutMdxNoteInput> = z.object({
  sequentialKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Ipynb: z.lazy(() => IpynbUncheckedUpdateManyWithoutSequentialListNestedInputSchema).optional()
}).strict();

export default SequentialNoteListUncheckedUpdateWithoutMdxNoteInputSchema;
