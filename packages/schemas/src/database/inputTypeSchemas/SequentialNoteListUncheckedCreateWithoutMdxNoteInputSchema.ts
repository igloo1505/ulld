import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema } from './IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema.js';
export const SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema: z.ZodType<Prisma.SequentialNoteListUncheckedCreateWithoutMdxNoteInput> = z.object({
  sequentialKey: z.string(),
  Ipynb: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema).optional()
}).strict();
export default SequentialNoteListUncheckedCreateWithoutMdxNoteInputSchema;