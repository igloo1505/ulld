import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryCreateNestedManyWithoutBibInputSchema } from './BibEntryCreateNestedManyWithoutBibInputSchema';

export const BibCreateInputSchema: z.ZodType<Prisma.BibCreateInput> = z.object({
  id: z.number().int().optional(),
  filename: z.string(),
  firstSync: z.coerce.date().optional(),
  lastSync: z.coerce.date().optional(),
  entries: z.lazy(() => BibEntryCreateNestedManyWithoutBibInputSchema).optional()
}).strict();

export default BibCreateInputSchema;
