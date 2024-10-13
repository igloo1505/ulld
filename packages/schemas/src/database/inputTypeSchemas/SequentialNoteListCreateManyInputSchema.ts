import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const SequentialNoteListCreateManyInputSchema: z.ZodType<Prisma.SequentialNoteListCreateManyInput> = z.object({
  sequentialKey: z.string()
}).strict();
export default SequentialNoteListCreateManyInputSchema;