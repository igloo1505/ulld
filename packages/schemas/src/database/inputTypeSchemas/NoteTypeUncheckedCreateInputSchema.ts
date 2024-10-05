import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const NoteTypeUncheckedCreateInputSchema: z.ZodType<Prisma.NoteTypeUncheckedCreateInput> = z.object({
  name: z.string()
}).strict();

export default NoteTypeUncheckedCreateInputSchema;
