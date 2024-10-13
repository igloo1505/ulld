import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const NoteTypeCreateInputSchema: z.ZodType<Prisma.NoteTypeCreateInput> = z.object({
  name: z.string()
}).strict();
export default NoteTypeCreateInputSchema;