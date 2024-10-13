import type { Prisma } from '@ulld/database/db';
import { z } from 'zod';
import { BibEntryCreateNestedManyWithoutBibInputSchema } from '../BibEntryCreateNestedManyWithoutBibInputSchema.js';
export const BibCreateInputSchema: z.ZodType<Prisma.BibCreateInput> = z.object({
  id: z.number().int().optional(),
  filename: z.string(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional(),
  entries: z.lazy(() => BibEntryCreateNestedManyWithoutBibInputSchema).optional()
}).strict();
export default BibCreateInputSchema;