import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbCreateNestedManyWithoutSequentialListInputSchema } from './IpynbCreateNestedManyWithoutSequentialListInputSchema.js';
export const SequentialNoteListCreateWithoutMdxNoteInputSchema: z.ZodType<Prisma.SequentialNoteListCreateWithoutMdxNoteInput> = z.object({
  sequentialKey: z.string(),
  Ipynb: z.lazy(() => IpynbCreateNestedManyWithoutSequentialListInputSchema).optional()
}).strict();
export default SequentialNoteListCreateWithoutMdxNoteInputSchema;