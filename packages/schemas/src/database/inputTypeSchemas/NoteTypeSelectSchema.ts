import { z } from 'zod';
import type { Prisma } from '@ulld/database/db';
export const NoteTypeSelectSchema: z.ZodType<Prisma.NoteTypeSelect> = z.object({
  name: z.boolean().optional(),
}).strict()
export default NoteTypeSelectSchema;