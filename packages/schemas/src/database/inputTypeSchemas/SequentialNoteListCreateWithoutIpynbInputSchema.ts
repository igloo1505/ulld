import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteCreateNestedManyWithoutSequentialListInputSchema } from './MdxNoteCreateNestedManyWithoutSequentialListInputSchema';

export const SequentialNoteListCreateWithoutIpynbInputSchema: z.ZodType<Prisma.SequentialNoteListCreateWithoutIpynbInput> = z.object({
  sequentialKey: z.string(),
  MdxNote: z.lazy(() => MdxNoteCreateNestedManyWithoutSequentialListInputSchema).optional()
}).strict();

export default SequentialNoteListCreateWithoutIpynbInputSchema;
