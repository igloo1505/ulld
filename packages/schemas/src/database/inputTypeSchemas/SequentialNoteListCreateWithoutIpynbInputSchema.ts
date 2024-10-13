import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteCreateNestedManyWithoutSequentialListInputSchema } from '../MdxNoteCreateNestedManyWithoutSequentialListInputSchema.js';
export const SequentialNoteListCreateWithoutIpynbInputSchema: z.ZodType<Prisma.SequentialNoteListCreateWithoutIpynbInput> = z.object({
  sequentialKey: z.string(),
  MdxNote: z.lazy(() => MdxNoteCreateNestedManyWithoutSequentialListInputSchema).optional()
}).strict();
export default SequentialNoteListCreateWithoutIpynbInputSchema;