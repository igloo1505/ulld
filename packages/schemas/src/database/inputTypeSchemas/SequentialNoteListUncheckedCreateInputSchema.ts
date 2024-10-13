import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteUncheckedCreateNestedManyWithoutSequentialListInputSchema } from '../MdxNoteUncheckedCreateNestedManyWithoutSequentialListInputSchema.js';
import { IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema } from '../IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema.js';
export const SequentialNoteListUncheckedCreateInputSchema: z.ZodType<Prisma.SequentialNoteListUncheckedCreateInput> = z.object({
  sequentialKey: z.string(),
  MdxNote: z.lazy(() => MdxNoteUncheckedCreateNestedManyWithoutSequentialListInputSchema).optional(),
  Ipynb: z.lazy(() => IpynbUncheckedCreateNestedManyWithoutSequentialListInputSchema).optional()
}).strict();
export default SequentialNoteListUncheckedCreateInputSchema;