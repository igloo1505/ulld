import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { MdxNoteUpdateManyWithoutSequentialListNestedInputSchema } from './MdxNoteUpdateManyWithoutSequentialListNestedInputSchema';

export const SequentialNoteListUpdateWithoutIpynbInputSchema: z.ZodType<Prisma.SequentialNoteListUpdateWithoutIpynbInput> = z.object({
  sequentialKey: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  MdxNote: z.lazy(() => MdxNoteUpdateManyWithoutSequentialListNestedInputSchema).optional()
}).strict();

export default SequentialNoteListUpdateWithoutIpynbInputSchema;
