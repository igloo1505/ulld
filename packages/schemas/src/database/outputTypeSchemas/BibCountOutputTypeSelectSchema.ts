import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BibCountOutputTypeSelectSchema: z.ZodType<Prisma.BibCountOutputTypeSelect> = z.object({
  entries: z.boolean().optional(),
}).strict();

export default BibCountOutputTypeSelectSchema;
