import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryUncheckedCreateNestedManyWithoutBibInputSchema } from './BibEntryUncheckedCreateNestedManyWithoutBibInputSchema.js';
export const BibUncheckedCreateInputSchema: z.ZodType<Prisma.BibUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  filename: z.string(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional(),
  entries: z.lazy(() => BibEntryUncheckedCreateNestedManyWithoutBibInputSchema).optional()
}).strict();
export default BibUncheckedCreateInputSchema;