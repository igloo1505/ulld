import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MdxNoteUncheckedCreateNestedManyWithoutSequentialListInputSchema } from './MdxNoteUncheckedCreateNestedManyWithoutSequentialListInputSchema';

export const SequentialNoteListUncheckedCreateWithoutIpynbInputSchema: z.ZodType<Prisma.SequentialNoteListUncheckedCreateWithoutIpynbInput> = z.object({
  sequentialKey: z.string(),
  MdxNote: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutSequentialListInputSchema).optional()
}).strict();

export default SequentialNoteListUncheckedCreateWithoutIpynbInputSchema;
