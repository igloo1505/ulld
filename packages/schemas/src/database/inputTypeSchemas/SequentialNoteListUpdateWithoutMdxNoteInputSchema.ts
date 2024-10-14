import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IpynbUpdateManyWithoutSequentialListNestedInputSchema } from './IpynbUpdateManyWithoutSequentialListNestedInputSchema';

export const SequentialNoteListUpdateWithoutMdxNoteInputSchema: z.ZodType<Prisma.SequentialNoteListUpdateWithoutMdxNoteInput> = z.object({
  sequentialKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  Ipynb: z.lazy(() => IpynbUpdateManyWithoutSequentialListNestedInputSchema).optional()
}).strict();

export default SequentialNoteListUpdateWithoutMdxNoteInputSchema;
