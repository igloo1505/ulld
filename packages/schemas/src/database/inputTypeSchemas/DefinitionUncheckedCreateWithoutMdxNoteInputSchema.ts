import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const DefinitionUncheckedCreateWithoutMdxNoteInputSchema: z.ZodType<Prisma.DefinitionUncheckedCreateWithoutMdxNoteInput> = z.object({
  id: z.string(),
  label: z.string().optional().nullable(),
  content: z.string().optional().nullable(),
  alphabeticalLabel: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  lastAccess: z.coerce.date().optional()
}).strict();

export default DefinitionUncheckedCreateWithoutMdxNoteInputSchema;
