import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { MdxNoteUncheckedUpdateManyWithoutSequentialListNestedInputSchema } from './MdxNoteUncheckedUpdateManyWithoutSequentialListNestedInputSchema';
import { IpynbUncheckedUpdateManyWithoutSequentialListNestedInputSchema } from './IpynbUncheckedUpdateManyWithoutSequentialListNestedInputSchema';

export const SequentialNoteListUncheckedUpdateInputSchema: z.ZodType<Prisma.SequentialNoteListUncheckedUpdateInput> = z.object({
  sequentialKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  MdxNote: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutSequentialListNestedInputSchema).optional(),
  Ipynb: z.lazy(() => IpynbUncheckedUpdateManyWithoutSequentialListNestedInputSchema).optional()
}).strict();

export default SequentialNoteListUncheckedUpdateInputSchema;
