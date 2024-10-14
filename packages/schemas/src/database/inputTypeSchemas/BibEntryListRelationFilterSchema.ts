import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BibEntryWhereInputSchema } from './BibEntryWhereInputSchema';

export const BibEntryListRelationFilterSchema: z.ZodType<Prisma.BibEntryListRelationFilter> = z.object({
  every: z.lazy(() => BibEntryWhereInputSchema).optional(),
  some: z.lazy(() => BibEntryWhereInputSchema).optional(),
  none: z.lazy(() => BibEntryWhereInputSchema).optional()
}).strict();

export default BibEntryListRelationFilterSchema;
