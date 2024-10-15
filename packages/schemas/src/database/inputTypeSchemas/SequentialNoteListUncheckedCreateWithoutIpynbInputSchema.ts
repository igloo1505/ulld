import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteUncheckedCreateNestedManyWithoutSequentialListInputSchema } from './MdxNoteUncheckedCreateNestedManyWithoutSequentialListInputSchema.js';
export const SequentialNoteListUncheckedCreateWithoutIpynbInputSchema: z.ZodType<Prisma.SequentialNoteListUncheckedCreateWithoutIpynbInput> = z.object({
  sequentialKey: z.string(),
  MdxNote: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutSequentialListInputSchema).optional()
}).strict();
export default SequentialNoteListUncheckedCreateWithoutIpynbInputSchema;