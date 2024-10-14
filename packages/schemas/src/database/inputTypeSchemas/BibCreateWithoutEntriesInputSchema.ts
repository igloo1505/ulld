import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BibCreateWithoutEntriesInputSchema: z.ZodType<Prisma.BibCreateWithoutEntriesInput> = z.object({
  id: z.number().int().optional(),
  filename: z.string(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional()
}).strict();

export default BibCreateWithoutEntriesInputSchema;
