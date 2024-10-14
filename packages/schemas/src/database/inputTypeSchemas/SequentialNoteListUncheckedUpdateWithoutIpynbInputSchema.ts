import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { MdxNoteUncheckedUpdateManyWithoutSequentialListNestedInputSchema } from './MdxNoteUncheckedUpdateManyWithoutSequentialListNestedInputSchema';

export const SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema: z.ZodType<Prisma.SequentialNoteListUncheckedUpdateWithoutIpynbInput> = z.object({
  sequentialKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  MdxNote: z.lazy(() => MdxNoteUncheckedUpdateManyWithoutSequentialListNestedInputSchema).optional()
}).strict();

export default SequentialNoteListUncheckedUpdateWithoutIpynbInputSchema;
