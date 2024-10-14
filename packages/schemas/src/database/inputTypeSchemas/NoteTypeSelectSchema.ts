import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const NoteTypeSelectSchema: z.ZodType<Prisma.NoteTypeSelect> = z.object({
  name: z.boolean().optional(),
}).strict()

export default NoteTypeSelectSchema;
