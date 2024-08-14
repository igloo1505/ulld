import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { MdxNoteUpdateManyWithoutSequentialListNestedInputSchema } from './MdxNoteUpdateManyWithoutSequentialListNestedInputSchema';
import { IpynbUpdateManyWithoutSequentialListNestedInputSchema } from './IpynbUpdateManyWithoutSequentialListNestedInputSchema';

export const SequentialNoteListUpdateInputSchema: z.ZodType<Prisma.SequentialNoteListUpdateInput> = z.object({
  sequentialKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  MdxNote: z.lazy(() => MdxNoteUpdateManyWithoutSequentialListNestedInputSchema).optional(),
  Ipynb: z.lazy(() => IpynbUpdateManyWithoutSequentialListNestedInputSchema).optional()
}).strict();

export default SequentialNoteListUpdateInputSchema;
