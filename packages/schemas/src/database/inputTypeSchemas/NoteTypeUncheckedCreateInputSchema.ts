import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
export const NoteTypeUncheckedCreateInputSchema: z.ZodType<Prisma.NoteTypeUncheckedCreateInput> = z.object({
  name: z.string()
}).strict();
export default NoteTypeUncheckedCreateInputSchema;