import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const NoteTypeCreateInputSchema: z.ZodType<Prisma.NoteTypeCreateInput> = z.object({
  name: z.string()
}).strict();

export default NoteTypeCreateInputSchema;
