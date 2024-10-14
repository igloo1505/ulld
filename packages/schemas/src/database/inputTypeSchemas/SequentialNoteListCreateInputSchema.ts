import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { MdxNoteCreateNestedManyWithoutSequentialListInputSchema } from './MdxNoteCreateNestedManyWithoutSequentialListInputSchema.js';
import { IpynbCreateNestedManyWithoutSequentialListInputSchema } from './IpynbCreateNestedManyWithoutSequentialListInputSchema.js';
export const SequentialNoteListCreateInputSchema: z.ZodType<Prisma.SequentialNoteListCreateInput> = z.object({
  sequentialKey: z.string(),
  MdxNote: z.lazy(() => MdxNoteCreateNestedManyWithoutSequentialListInputSchema).optional(),
  Ipynb: z.lazy(() => IpynbCreateNestedManyWithoutSequentialListInputSchema).optional()
}).strict();
export default SequentialNoteListCreateInputSchema;